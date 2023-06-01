let computerSelection;
let scorePlayer = 0;
let scoreComputer = 0;
let roundMessage;
let playerSelection;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    
    randomNumber === 1 ? computerSelection = 'rock' :
    randomNumber === 2 ? computerSelection = 'paper' :
    randomNumber === 3 ? computerSelection = 'scissors' :
    alert('Developer FAULT! randomNumber is not between 1-3!');

    return computerSelection;
}

function playRound() {
    playerSelection = prompt("What's your move?", '');
    playerSelection = playerSelection.toLowerCase();
    getComputerChoice();

    if (playerSelection === 'rock' & computerSelection === 'paper' ||
        playerSelection === 'paper' & computerSelection === 'scissors' ||
        playerSelection === 'scissors' & computerSelection === 'rock') {
      ++scoreComputer;
      roundMessage = 'You lost this Round! ' + computerSelection + ' beats ' + playerSelection;
    } else if (playerSelection === 'rock' & computerSelection === 'scissors' ||
               playerSelection === 'paper' & computerSelection === 'rock' ||
               playerSelection === 'scissors' & computerSelection === 'paper') {
      ++scorePlayer;
      roundMessage = 'You won this Round! ' + playerSelection + ' beats ' + computerSelection;
    } else if (playerSelection === computerSelection) {
      roundMessage = 'This round is a draw!'
    } else {
      roundMessage = `You have to type "rock", "paper" or "scissors"! "Well" doesn't count!`;
    }
}

function game() {
    
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log(roundMessage);
    }
    let score = 'The final score is: Player: ' + scorePlayer + ' and Computer: ' + scoreComputer;

    return score;
}
console.log(game());