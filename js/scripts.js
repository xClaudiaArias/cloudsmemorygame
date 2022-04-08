$(document).ready(function() {

let gameContainer = $("#game-container");
let startGameBtn = $("#start-game");
let playAgainModal = $("#play-again");
let playAgainBtn = $("#play-again-btn");
let levelSpan = $("#level-span");
let scoreSpan = $("#score-span");
let lev = $("#lev");

let allImgs = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"];

let imgs = [];
let randomizeImgsArray = [];

let score = 0;
let level = 1;

let nums_of_imgs = 4;
gameContainer.hide()
    
    const game = () => {
        levelSpan.text(level)
        gameContainer.show()
        startGameBtn.hide()
    
        const updateLevel = () => {
        if (score === 4){
            level = 2;
            nums_of_imgs = 6
            imgs = []
            randomizeImgsArray = []
        } else if (score === 10){
            level = 3
            nums_of_imgs = 8
            imgs = []
            randomizeImgsArray = []
        } else {
            if (score >= 18){
                levelSpan.hide()
                lev.hide()
            }
        }
        levelSpan.text(level)
        return level
        };
    
        const updateScore = () => {
            score += 1;
            scoreSpan.text(score)
            return score;
        };
    
        const generateImgs = () => {
    
            // choosing random images twice
            for (let i = 0; i < nums_of_imgs; i++){
                let random_num = Math.floor(Math.random() * nums_of_imgs)
    
                if (!imgs.includes(allImgs[random_num]) && allImgs[random_num] !== undefined){
                    imgs.push(allImgs[random_num])
                    imgs.push(allImgs[random_num])
                } else {
                    // adds one more loop to get the four images needed.
                    nums_of_imgs += 1
                }
            }
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
        }
    
        randomizeImgs() 
    
        const displayImgs = () => {
    
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
        let correctAnswers = [];
    
    
        const matchImgs = (e) => {
            let cover = e.target
    
            if (matched.length < 2){
                matched.push($(cover).attr('class').split(' ')[1])
                $(cover).hide()
                correctAnswers.push(cover)
            }
    
            compareImgs(e)
        }
    
    
        const compareImgs = () => {
    
            if (matched[0] === matched[1]){
                updateScore()
                updateLevel()
                matched = [];
                correctAnswers = [];
            } else {
                if (matched.length === 2) {
                    matched = [];
                    flipBack()
                }
            }
        }
    
        const flipBack = () => {
            correctAnswers.forEach(a => {
                let wait = setInterval(function(){
                    $(a).show()
                    clearInterval(wait)
                }, 1000)
            })
        }
    
        
        covers.on("click", matchImgs)
    }
    
    // START GAME 
    startGameBtn.on('click', game)
    
    // LEVEL UP 
    let level2 = setInterval(() => {
        if (level === 2){
            gameContainer.empty()
            game()
            clearInterval(level2)
        }
    }, 1000);
    
    let level3 = setInterval(() => {
        if (level === 3){
            gameContainer.empty()
            game()
            clearInterval(level3)
        }
    }, 1000);
    
    let gameOver = setInterval(() => {
        if (score === 18){
            win()
            clearInterval(gameOver)
        }
    }, 1000);
    
    
    const win = () => {
        $("#announce-win").html("<div id='congrats'><h2>Congratulations!</h2><p>YOU WON!!!</p></div>")
        playAgainModal.show()
        gameContainer.hide()

        playAgainBtn.on("click", function(){
            let wait = setTimeout(function(){
                location.reload();
                clearTimeout(wait)
            }, 500)
        })
    
        $("#close-play-again").on('click', function() {
            let wait = setTimeout(function(){
                location.reload();
                clearTimeout(wait)
            }, 500)
        })
    }

});
