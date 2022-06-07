let inputDirection = {x: 0, y: 0}
let previousDirection = {x: 0, y: 0}

window.addEventListener("keydown", e=>{
    switch(e.keyCode){
        case 38:
            if(previousDirection.y !== 0){break}
            inputDirection = {x: 0, y: -1}

            break; 
        case 40:
            if(previousDirection.y !== 0){break}
            inputDirection = {x: 0, y: 1}
            break; 
        case 37:
            if(previousDirection.x !== 0){break}
            inputDirection = {x: -1, y: -0}
            break; 
        case 39:
            if(previousDirection.x !== 0){break}
            inputDirection = {x: 1, y: 0}
            break; 
    }
})

export function getInputDirection(){
    previousDirection = inputDirection
    return inputDirection
}