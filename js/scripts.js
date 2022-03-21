let gameContainer = $("#game-container");
const startGameBtn = $("#start-game");
const playAgain = $("#play-again-btn");

let allImgs = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"];
// images per level 
let imgs = [];
let randomizeImgsArray = [];

// console.log(imgs, ' imgs BEFORE')

let score = 0;
let level = 0;
let isGame = true;

// this is how many images will be displayed per level
let nums_of_imgs = 0;


// functions 
const start_game = () => {

};

const updateLevel = () => {
    level += 1;
    // console.log("level: ",level)
    return level
};

const updateScore = () => {
    score += 1;
    // console.log("score: ",score)
    return score;
};

const generateImgs = () => {
    nums_of_imgs = 4;
    // choosing random images twice
    for (let i = 0; i < nums_of_imgs; i++){
        let random_num = Math.floor(Math.random() * nums_of_imgs)

        if (!imgs.includes(allImgs[random_num])){
            imgs.push(allImgs[random_num])
            imgs.push(allImgs[random_num])
        } else {
            // adds one more loop to get the four images needed.
            nums_of_imgs += 1
        }
    }

    // console.log(imgs, " :imgs")
};

generateImgs()

const randomizeImgs = () => {

    let randomIndexArr = [];
    let num = imgs.length
    let i = 0;

    while (i < num){
        let random_index = Math.floor(Math.random() * imgs.length)

        if (!randomIndexArr.includes(random_index)) {
            randomIndexArr.push(random_index)
        } else {
            num++
        }
        i++
    }

    randomIndexArr.forEach(index => {
        randomizeImgsArray.push(imgs[index])
    })

    // console.log(randomizeImgsArray, " :randomizeImgsArray")
}

randomizeImgs()

const displayImgs = () => {
    // todo:

    for (let i = 0; i < randomizeImgsArray.length; i++){
        // parent div 
        let card = document.createElement("div")
        card.classList.add("card")
        card.classList.add("card-" + i)
        // card cover 
        let cover = document.createElement("div")
        cover.classList.add("cover")
        cover.classList.add(randomizeImgsArray[i])

        let img_card = document.createElement("img")
        img_card.setAttribute("src", `./images/${randomizeImgsArray[i]}`)
        img_card.classList.add("img_card")
        img_card.classList.add(randomizeImgsArray[i])

        // console.log(img_card, " :::img_card")

        // append to parent 
        card.appendChild(cover)
        card.appendChild(img_card)
        // append parent to container 
        gameContainer.append(card);
    }
}

displayImgs()

let covers = $(".cover")
let matched = [];
    
    // note: REFERENCE: DONT DELETE 
    // gets the second class that matches)
    // console.log(covers.attr('class').split(' ')[1])

console.log(covers, " :covers")

const matchImgs = (e) => {
    let cover = e.target

    if (matched.length < 2){
        matched.push($(cover).attr('class').split(' ')[1])
    }

    compareImgs()
}

covers.on("click", matchImgs)

const compareImgs = () => {
    console.log(matched, " :matched inside")
    if (matched[0] === matched[1]){
        updateScore()
        matched = [];
    } else {
        if (matched.length === 2) {
            matched = []
        }
    }

    console.log("new score: ", score)
}

const winnerModal = () => {

}




// gets the second class that matches)
// console.log(covers.attr('class').split(' ')[1])


