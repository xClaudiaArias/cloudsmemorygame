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
let nums_of_imgs = 0;


// functions 
const start_game = () => {
    nums_of_imgs = 4;


};

const updateLevel = () => {
    return level += 1;
};

const updateScore = () => {
    return score += 1;
};

const generateImgs = () => {
    if (isGame){
        if (level === 1) {
            
        }
    }

};

const winnerModal = () => {

}



