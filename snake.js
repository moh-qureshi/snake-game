import { getInputDirection } from "./controls.js"
let newSegments = 0
const snake = [{x: 10, y: 11}]
const lightModeSetting = document.getElementById("light-dark-mode")
let mode = "light"

lightModeSetting.addEventListener("click", () =>{
    if (mode === "light"){
        mode = "dark"
    } else if (mode === "dark"){
        mode = "light"
    }
})


export function update(){
    addSegments()

    const inputDirection = getInputDirection()
    for(let i = snake.length - 2; i >= 0; i--){
        snake[i + 1] = {...snake[i]}
    }

    snake[0].x += inputDirection.x
    snake[0].y += inputDirection.y
}

export function draw(snakeScreen){
    snake.forEach(segment =>{
        const snakeElement = document.createElement("div")
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add("snake")
        snakeScreen.appendChild(snakeElement)
        if(mode === "light"){
            snakeElement.style.background = "chartreuse"
            snakeElement.style.border = "1px solid green"
        } else if(mode === "dark"){
            snakeElement.style.background = "darkslategrey"
            snakeElement.style.border = "1px solid grey"
        }
    })
}

export function growSnake(amount){
    newSegments += amount
}

export function onSnake(position, {ignoreHead = false} = {}){
    return snake.some((segment, index) =>{
        if(ignoreHead && index === 0 ) return false
        return equalPositions(segment, position)
    })
}

function equalPositions(positionOne, positionTwo){
    return (
        positionOne.x === positionTwo.x && positionOne.y === positionTwo.y
    )
}

function addSegments(){
    for(let i = 0; i < newSegments; i++){
        snake.push({...snake[snake.length - 1]})
    }

    newSegments = 0
}

export function getSnakeHead(){
    return snake[0]
}


export function snakeHit(){
    return onSnake(snake[0], {ignoreHead: true})
}