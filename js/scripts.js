let gameContainer = $("#game-container");
const startGameBtn = $("#start-game");
const playAgain = $("#play-again-btn");

let allImgs = ["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg","7.jpeg","8.jpeg"];
// images per level 
let imgs = [];

console.log(imgs, ' images BEFORE')

let score = 0;
let level = 0;
let isGame = true;

// this is how many images will be displayed per level
let nums_of_imgs = 4;


// functions 
const start_game = () => {

};

const updateLevel = () => {
    level += 1;
    console.log("level: ",level)
    return level
};

const updateScore = () => {
    score += 1;
    console.log("score: ",score)
    return score;
};

const generateImgs = () => {


        // choosing random images 
        for (let i = 0; i < nums_of_imgs; i++){
            let random_num = Math.floor(Math.random() * nums_of_imgs)

            console.log(allImgs[random_num])
            if (!imgs.includes(allImgs[random_num])){
                imgs.push(allImgs[random_num])
            } else {
                // adds one more loop to get the four images needed.
                nums_of_imgs += 1
            }
        }

    // if (isGame){
    //     if (level === 1) {
    //     }
    // }

    // imgs array 
    console.log(imgs)

};

generateImgs()

const winnerModal = () => {

}



