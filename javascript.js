function computerPlay(number) {
    if (number === 0) {
        return "Computer Selected: Rock"; 
    } else if (number === 1) {
        return "Computer Selected: Paper"
    } else if (number === 2) {
        return "Computer Selected: Scissors"
    } else {
        return "Something else went wrong"
    }
}

function playerSelection(item) {
    if (item == 'rock') {
        return "User Selected : Rock"
    } else if (item == 'paper') {
        return "User Selected : Paper"
    } else if (item == 'scissors') {
        return "User Selected : Scissors"
    } else {
        return "Invalid Item"
    }
}

let prompt = window.prompt("Enter Rock, Paper or Scissors: ")
let randomNumber = Math.floor(Math.random() * 3); 

console.log(playerSelection(prompt.toLowerCase()));
console.log(computerPlay(randomNumber)); 