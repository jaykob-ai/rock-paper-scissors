let computerSelection;
let scorePlayer = 0;
let scoreComputer = 0;
let roundMessage;
let playerSelection;
let gameGoing = true;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    
    randomNumber === 1 ? computerSelection = 'rock' :
    randomNumber === 2 ? computerSelection = 'paper' :
    randomNumber === 3 ? computerSelection = 'scissors' :
    alert('Developer FAULT! randomNumber is not between 1-3!');

    return computerSelection;
}

function playRound(playerSelection) {
  if (gameGoing === true) {
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
    } else {
      roundMessage = 'This round is a draw!';
    }
    

    const score = document.querySelector('.score');
    score.textContent = 'Player: ' + scorePlayer + ', Computer: ' + scoreComputer;
    const results = document.querySelector('.results');
    results.textContent = roundMessage;

    if (scorePlayer === 5) {
      score.textContent = 'Player: ' + scorePlayer + ', Computer: ' + scoreComputer + '. Game is over! You won!';
      return gameGoing = false;
    } else if (scoreComputer === 5) {
      score.textContent = 'Player: ' + scorePlayer + ', Computer: ' + scoreComputer + '. Game is over! You lost!';
      return gameGoing = false;
    }
  }  
}

/*function game() {
    
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    let score = 'The final score is: Player: ' + scorePlayer + ' and Computer: ' + scoreComputer;

    return score;
}*/

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click', () => playRound('scissors'));