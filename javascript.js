function computerPlay(number) {
    if (number === 0) {
        return "Rock"; 
    } else if (number === 1) {
        return "Paper"
    } else if (number === 2) {
        return "Scissors"
    } else {
        return "Something else went wrong"
    }
}

function playerPlay(item) {
    if (item == 'rock') {
        return "Rock"
    } else if (item == 'paper') {
        return "Paper"
    } else if (item == 'scissors') {
        return "Scissors"
    } else {
        return "Invalid Item"
    }
}

// Tie breaker works for all the three but for some reason only rock works for win or lose. Get undefined
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie."
    }

    if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            return "You lose! Paper beats Rock.";  
            computerScore++; 
        } else if (computerSelection === 'Scissors') {
            return "You win! Rock beats Scissors."
            playerScore++; 
        }
    } else if (playerSelection === 'Paper') {
        if (computerPlay === 'Rock') {
            return "You win! Paper beats rock."
            playerScore++; 
        } else if (computerPlay === 'Scissors') {
            return "You lose! Scissors beats Paper."
            computerScore++; 
        }
    } else if (playerSelection === 'Scissors') {
        if (computerPlay === 'Rock') {
            return "You lose! Rock beats Scissors."
            computerScore++; 
        }   else if (computerPlay === 'Paper') {
            return "You win! Scissors beats Paper."
            playerScore++; 
        }
    }
}

// Only will play one game still
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
        return "Computer score: " + computerScore; 
        return "Player Score: " + playerScore; 
        i++; 
    }
}

let prompt = window.prompt("Enter Rock, Paper or Scissors: ")
let randomNumber = Math.floor(Math.random() * 3); 

const computerSelection = computerPlay(randomNumber); 
const playerSelection = playerPlay(prompt.toLowerCase()); 

let computerScore = 0; 
let playerScore = 0; 

game(); 