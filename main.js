import { getSnakeHead, snakeHit, update as updateSnake, draw as drawSnake } from "./snake.js"
import { update as updateFood, draw as drawFood } from "./food.js"
import { outsideScreen } from "./screen.js"
import { scoreCount } from "./food.js"

const navbar = document.getElementById("navbar")
const musicSetting = document.getElementById("music")
const soundSetting = document.getElementById("sound")
const lightModeSetting = document.getElementById("light-dark-mode")
const snakeScreen = document.getElementById("snake-grid")
const newGameNav = document.getElementById("new-game-nav")
const level = document.getElementById("level")
const pauseGame = document.getElementById("pause-game")
const startGame = document.getElementById("start-game-btn")
const startGameScreen = document.getElementById("start-game-screen")
const pauseScreen = document.getElementById("pause-screen")
const resumeGame = document.getElementById("resume-btn")
const gameOverScreen = document.getElementById("game-over-screen")
const finalScore = document.getElementById("score-box")
const playAgain = document.getElementById("play-again-btn")
const circle = document.getElementById("circle")
const backgroundMusic = new Audio()
const buttonClick = new Audio()
const gameOverSound = new Audio()


backgroundMusic.src = "./sounds/backgroundMusic.mp3"
buttonClick.src = "./sounds/click.mp3"
gameOverSound.src = "./sounds/gameover.mp3"
backgroundMusic.loop = true
backgroundMusic.autoplay = true

let lastRenderTime = 0
let gameOver = false
let snakeSpeed = 5
let mode = "light"

soundSetting.addEventListener("click", function(){
    buttonClick.currentTime = 0
    buttonClick.play()
    toggleSound()
})
musicSetting.addEventListener("click", function(){
    if(soundSetting.innerHTML === `<i class="fa-solid fa-volume-high"></i>`){
        buttonClick.currentTime = 0
        buttonClick.play()
    }
    toggleMusic()
})
lightModeSetting.addEventListener("click", function(){
    let snake = document.querySelector(".snake")
    let food = document.querySelector(".food")
    if(soundSetting.innerHTML === `<i class="fa-solid fa-volume-high"></i>`){
        buttonClick.currentTime = 0
        buttonClick.play()
    }
    if(mode === "light"){
        mode = "dark"
        circle.style.transform = "translateX(-50px)"
        navbar.classList.remove("lightmode")
        snakeScreen.classList.remove("lightmode-grid")
        lightModeSetting.classList.remove("light-mode-mode-settings")
        lightModeSetting.classList.add("dark-mode-mode-settings")
        startGameScreen.classList.add("dark-mode-mode-settings")
        snakeScreen.classList.add("darkmode-grid")
        circle.classList.add("dark-mode-mode-settings")
        navbar.classList.add("darkmode")
        document.body.style.background = "linear-gradient(45deg, black, darkslategrey, black)"
    } else if(mode === "dark"){
        mode = "light"
        circle.style.transform = "translateX(0px)"
        navbar.classList.remove("darkmode")
        snakeScreen.classList.remove("darkmode-grid")
        lightModeSetting.classList.remove("dark-mode-mode-settings")
        circle.classList.remove("dark-mode-mode-settings")
        startGameScreen.classList.remove("dark-mode-mode-settings")
        lightModeSetting.classList.add("light-mode-mode-settings")
        circle.classList.add("light-mode-mode-settings")
        startGameScreen.classList.add("light-mode-mode-settings")
        snakeScreen.classList.add("lightmode-grid")
        navbar.classList.add("lightmode")
        document.body.style.background = "linear-gradient(45deg, khaki, lightgreen, khaki)"
    }
})
newGameNav.addEventListener("click", function(){
    gameOverScreen.classList.remove("screen-animation")
    pauseScreen.style.display = "flex"
    gameOverScreen.style.opacity = 0
    window.location = "/"
    if(soundSetting.innerHTML === `<i class="fa-solid fa-volume-high"></i>`){
        buttonClick.currentTime = 0
        buttonClick.play()
    }
})
pauseGame.addEventListener("click", function(){
    snakeSpeed = 0
    pauseScreen.style.visibility = "initial"
    pauseScreen.classList.add("screen-animation")
    if(soundSetting.innerHTML === `<i class="fa-solid fa-volume-high"></i>`){
        buttonClick.currentTime = 0
        buttonClick.play()
    }
})
resumeGame.addEventListener("click", function(){
    snakeSpeed = 5
    pauseScreen.classList.remove("screen-animation")
    pauseScreen.style.opacity = 0
    if(soundSetting.innerHTML === `<i class="fa-solid fa-volume-high"></i>`){
        buttonClick.currentTime = 0
        buttonClick.play()
    }
})
playAgain.addEventListener("click", function(){
    buttonClick.currentTime = 0
    buttonClick.play()
    gameOverScreen.classList.remove("screen-animation")
    pauseScreen.style.display = "flex"
    gameOverScreen.style.opacity = 0
    window.location = "/"
})
startGame.addEventListener("click", function(){
    startGameScreen.style.display = "none"
    gameOverScreen.style.opacity = 0
    gameOverScreen.style.visibility = "initial"
    snakeScreen.style.opacity = 1
    if(soundSetting.innerHTML === `<i class="fa-solid fa-volume-high"></i>`){
        buttonClick.currentTime = 0
        buttonClick.play()
    }
    if(musicSetting.innerHTML === `<i class="fa-solid fa-music"></i>`){
        backgroundMusic.play()
    }
})
function toggleMusic(){
    if(musicSetting.innerHTML === `<i class="fa-solid fa-music"></i>`){
        backgroundMusic.pause()
        musicSetting.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`
    } else if(musicSetting.innerHTML === `<i class="fa-solid fa-volume-xmark"></i>`){
        backgroundMusic.play()
        musicSetting.innerHTML = `<i class="fa-solid fa-music"></i>`
    }
}

function toggleSound(){
    if(soundSetting.innerHTML === `<i class="fa-solid fa-volume-high"></i>`){
        soundSetting.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`
    } else if(soundSetting.innerHTML === `<i class="fa-solid fa-volume-xmark"></i>`){
        soundSetting.innerHTML = `<i class="fa-solid fa-volume-high"></i>`
    }
}


function main(currentTime){
    if(gameOver === true){
        return stopGame()
    }
    window.requestAnimationFrame(main)
    const secondsSinceLastRender  = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / snakeSpeed) return
    
    lastRenderTime = currentTime
    update()
    draw()
}

window.requestAnimationFrame(main)


function stopGame(){
    window.cancelAnimationFrame(main)
    pauseScreen.style.display = "none"
    gameOverScreen.classList.add("screen-animation")
    finalScore.textContent = scoreCount
    snakeSpeed = 0
    gameOverSound.play()
}

function levelIncrease(){
    switch(level.textContent){
        case "Level: 2":
            snakeSpeed = 6
            break;
        case "Level: 3":
            snakeSpeed = 7
            break;
        case "Level: 4":
            snakeSpeed = 8
            break;
        case "Level: 5":
            snakeSpeed = 9
            break;
        case "Level: 6":
            snakeSpeed = 10
            break;
        case "Level: 7":
            snakeSpeed = 10.5
            break;
        case "Level: 8":
            snakeSpeed = 11
            break;
        case "Level: 9":
            snakeSpeed = 11.5
            break;
        case "Level: 10":
            snakeSpeed = 12
            break;
        case "Level: 11":
            snakeSpeed = 12.5
            break;
        case "Level: 12":
            snakeSpeed = 13
            break;
        case "Level: 13":
            snakeSpeed = 13.5
            break;
        case "Level: 14":
            snakeSpeed = 14
            break;
        case "Level: 15":
            snakeSpeed = 14.5
            break;
        case "Level: 16":
            snakeSpeed = 15
            break;
        case "Level: 17":
            snakeSpeed = 15.5
            break;
    }
}

function update(){
    updateSnake()
    updateFood()
    levelIncrease()
    die()
}

function draw(){
    snakeScreen.innerHTML = ""
    drawSnake(snakeScreen)
    drawFood(snakeScreen)
}

function die(){
    gameOver = outsideScreen(getSnakeHead()) || snakeHit()
}

