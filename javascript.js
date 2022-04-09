let computerScore = 0;
let playerScore = 0;


const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click',play);

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click',play);

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click',play);

const div = document.querySelector('#results');

function play(e){
    let compMove = computerPlay();
    let status =  playRound(this.id,compMove);
    let p = document.createElement('p');
    if(status == 'lose'){
        computerScore += 1;
        p.textContent = 'You lose! ' + compMove + ' beats ' + this.id +'        Score-> Comp: ' + computerScore + ' Player: ' + playerScore + '\n';
        
        
    }else if(status == 'win'){
        playerScore += 1;
        p.textContent = 'You win! ' + this.id + ' beats ' + compMove +'     Score-> Comp: ' + computerScore + ' Player: ' + playerScore + '\n';
    }else{
        p.textContent = status +'\nScore->\tComp: ' + computerScore + ' Player: ' + playerScore + '\n';
    }

    div.appendChild(p);

    if(computerScore == 5){
        const result = document.createElement('p');
        result.textContent = 'YOU HAVE LOST THE GAME!!!';
        div.appendChild(result);
        computerScore = 0;
        playerScore = 0;
    }else if(playerScore == 5){
        const result = document.createElement('p');
        result.textContent = 'YOU HAVE WON THE GAME!!!';
        div.appendChild(result);
        computerScore = 0;
        playerScore = 0;
    }
    
    
}

function computerPlay(){
    let ran = Math.random()*3;
    if(ran<=1){
        return 'rock';
    }else if(ran <=2){
        return 'paper';
    }else{
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(computerSelection==playerSelection){
        return "It's a tie!";
    }else if(computerSelection == 'rock' && playerSelection == 'paper'){
        return "win";
    }else if(computerSelection == 'paper' && playerSelection == 'rock'){
        return "lose";
    }else if(computerSelection == 'paper' && playerSelection == 'scissors'){
        return "win";
    }else if(computerSelection == 'scissors' && playerSelection == 'paper'){
        return "lose";
    }else if(computerSelection == 'scissors' && playerSelection == 'rock'){
        return "win";
    }else if(computerSelection == 'rock' && playerSelection == 'scissors'){
        return "lose";
    }
}