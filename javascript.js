function computerPlay(number) {
    if (number === 0) {
        return "rock"; 
    } else if (number === 1) {
        return "paper";
    } else if (number === 2) {
        return "scissors";
    } else {
        return "Something else went wrong";
    }
}

function playerPlay(item) {
    if (item == 'rock') {
        return "rock";
    } else if (item == 'paper') {
        return "paper";
    } else if (item == 'scissors') {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie"; 
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore++; 
            return "You lose! Paper beats Rock.";  
        } else if (computerSelection === 'scissors') {
            playerScore++; 
            return "You win! Rock beats Scissors.";
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            playerScore++; 
            return "You win! Paper beats rock.";
        } else if (computerSelection == 'scissors') {
            computerScore++; 
            return "You lose! Scissors beats Paper.";
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++; 
            return "You lose! Rock beats Scissors.";
        } else if (computerSelection === 'paper') {
            playerScore++; 
            return "You win! Scissors beats Paper.";
        }
    }
}

// Have it repeating five times now but uses players pick for all five rounds
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
        console.log("Computer score: " + computerScore); 
        console.log("Player Score: " + playerScore); 
    }

    if (playerScore > computerScore) {
        return "Player Wins!";
    } else if (playerScore < computerScore) {
        return "Computer Wins!"; 
    } else {
        return "Somehow you tied!"; 
    }
}

let prompt = window.prompt("Enter Rock, Paper or Scissors: ");
let randomNumber = Math.floor(Math.random() * 3); 

const computerSelection = computerPlay(randomNumber); 
const playerSelection = playerPlay(prompt.toLowerCase()); 

let computerScore = 0; 
let playerScore = 0; 

game();