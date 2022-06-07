import { randomScreenPosition } from "./screen.js"
import { onSnake, growSnake } from "./snake.js"
const score = document.getElementById("score")
const soundSetting = document.getElementById("sound")
const lightModeSetting = document.getElementById("light-dark-mode")
const expansionRate = 1
const snakeSound = new Audio()
const levelUp = new Audio()
export let scoreCount = 0 
let food = randomFoodPosition()
let mode = "light"

lightModeSetting.addEventListener("click", () =>{
    if (mode === "light"){
        mode = "dark"
    } else if (mode === "dark"){
        mode = "light"
    }
})
levelUp.src = "./sounds/levelup.mp3"
snakeSound.src = "./sounds/snakeSound.mp3"


export function update(){
    if(onSnake(food)){
        if(soundSetting.innerHTML === `<i class="fa-solid fa-volume-high"></i>`){
            snakeSound.currentTime = 0
            snakeSound.play()
        }
       scoreCount += 5
       growSnake(expansionRate)
       food = randomFoodPosition()
       score.textContent = `Score: ${scoreCount}`
       updateScoreAndLevel()
   }
}

function updateScoreAndLevel(){
    switch(scoreCount){
        case 25:
            levelUp.play()
            level.textContent = "Level: 2"
            if(mode === "light"){
            level.classList.add("level-flash-light")
            } else if(mode === "dark"){
                level.classList.add("level-flash-dark")
            }
            break;
        case 30:
            level.classList.remove("level-flash")
            break;
        case 50:
            levelUp.play()
            level.textContent = "Level: 3"
            if(mode === "light"){
            level.classList.add("level-flash-light")
            } else if(mode === "dark"){
                level.classList.add("level-flash-dark")
            }
            break;
        case 55:
            level.classList.remove("level-flash")
            break;
        case 75:
            levelUp.play()
            level.textContent = "Level: 4"
            if(mode === "light"){
            level.classList.add("level-flash-light")
            } else if(mode === "dark"){
                level.classList.add("level-flash-dark")
            }
            break;
        case 80:
            level.classList.remove("level-flash")
            break;
        case 100:
            levelUp.play()
            level.textContent = "Level: 5"
            if(mode === "light"){
            level.classList.add("level-flash-light")
            } else if(mode === "dark"){
                level.classList.add("level-flash-dark")
            }
            break;
        case 105:
            level.classList.remove("level-flash")
            break;
        case 125:
            levelUp.play()
            level.textContent = "Level: 6"
            if(mode === "light"){
            level.classList.add("level-flash-light")
            } else if(mode === "dark"){
                level.classList.add("level-flash-dark")
            }
            break;
        case 130:
            level.classList.remove("level-flash")
            break;
        case 150:
            levelUp.play()
            level.textContent = "Level: 7"
            if(mode === "light"){
            level.classList.add("level-flash-light")
            } else if(mode === "dark"){
                level.classList.add("level-flash-dark")
            }
            break;
        case 155:
            level.classList.remove("level-flash")
            break;
        case 175:
            levelUp.play()
            level.textContent = "Level: 8"
            if(mode === "light"){
            level.classList.add("level-flash-light")
            } else if(mode === "dark"){
                level.classList.add("level-flash-dark")
            }
            break;
        case 80:
            level.classList.remove("level-flash")
            break;
        case 200:
            levelUp.play()
            level.textContent = "Level: 9"
            if(mode === "light"){
            level.classList.add("level-flash-light")
            } else if(mode === "dark"){
                level.classList.add("level-flash-dark")
            }
            break;
        case 205:
            level.classList.remove("level-flash")
            break;
        case 225:
            levelUp.play()
            level.textContent = "Level: 10"
            if(mode === "light"){
            level.classList.add("level-flash-light")
            } else if(mode === "dark"){
                level.classList.add("level-flash-dark")
            }
            break;
        case 230:
            level.classList.remove("level-flash")
            break;
        case 250:
            levelUp.play()
            level.textContent = "Level: 11"
            if(mode === "light"){
            level.classList.add("level-flash-light")
            } else if(mode === "dark"){
                level.classList.add("level-flash-dark")
            }
            break;
        case 255:
            level.classList.remove("level-flash")
            break;
        case 275:
            levelUp.play()
            level.textContent = "Level: 12"
            if(mode === "light"){
            level.classList.add("level-flash-light")
            } else if(mode === "dark"){
                level.classList.add("level-flash-dark")
            }
            break;
        case 280:
            level.classList.remove("level-flash")
            break;
        case 300:
            levelUp.play()
            level.textContent = "Level: 13"
            if(mode === "light"){
            level.classList.add("level-flash-light")
            } else if(mode === "dark"){
                level.classList.add("level-flash-dark")
            }
            break;
        case 305:
            level.classList.remove("level-flash")
            break;
        case 325:
            levelUp.play()
            level.textContent = "Level: 14"
            if(mode === "light"){
            level.classList.add("level-flash-light")
            } else if(mode === "dark"){
                level.classList.add("level-flash-dark")
            }
            break;
        case 330:
            level.classList.remove("level-flash")
            break;
        case 350:
            levelUp.play()
            level.textContent = "Level: 15"
            if(mode === "light"){
            level.classList.add("level-flash-light")
            } else if(mode === "dark"){
                level.classList.add("level-flash-dark")
            }
            break;
        case 355:
            level.classList.remove("level-flash")
            break;
        case 375:
            levelUp.play()
            level.textContent = "Level: 16"
            if(mode === "light"){
            level.classList.add("level-flash-light")
            } else if(mode === "dark"){
                level.classList.add("level-flash-dark")
            }
            break;
        case 380:
            level.classList.remove("level-flash")
            break;
        case 400:
            levelUp.play()
            level.textContent = "Level: 17"
            if(mode === "light"){
            level.classList.add("level-flash-light")
            } else if(mode === "dark"){
                level.classList.add("level-flash-dark")
            }
            break;
        case 405:
            level.classList.remove("level-flash")
            break;
     }
}



export function draw(snakeScreen){
        const foodElement = document.createElement("div")
        foodElement.style.gridRowStart = food.y
        foodElement.style.gridColumnStart = food.x
        foodElement.classList.add("food")
        snakeScreen.appendChild(foodElement)
        if(mode === "light"){
            foodElement.style.background = "green"
            foodElement.style.border = "1px solid chartreuse"
        } else if(mode === "dark"){
            foodElement.style.background = "lightgreen"
            foodElement.style.border = "1px solid grey"
        }
}

function randomFoodPosition(){
    let newFoodPosition
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomScreenPosition()
    }
    return newFoodPosition
}