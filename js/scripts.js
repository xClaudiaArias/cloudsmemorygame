let gameContainer = $("#game-container");
const startGameBtn = $("#start-game");
const playAgain = $("#play-again-btn");

let allImgs = ["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg","7.jpeg","8.jpeg"];
// images per level 
let imgs = [];
let displayImgs = [];

console.log(imgs, ' images BEFORE')

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
        displayImgs.push(imgs[index])
    })

    console.log(randomIndexArr, " :randomIndexArr")
    console.log(displayImgs, " :displayImgs")
}

randomizeImgs()

const winnerModal = () => {

}



