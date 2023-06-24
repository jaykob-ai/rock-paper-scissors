let computerSelection;
let scorePlayer = 0;
let scoreComputer = 0;
let roundMessage;
let playerSelection;
let gameGoing = true;
let section = document.querySelector('.section');
let text = document.querySelector('.text');

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    
    randomNumber === 1 ? computerSelection = 'rock' :
    randomNumber === 2 ? computerSelection = 'paper' :
    randomNumber === 3 ? computerSelection = 'scissors' :
    alert('Developer FAULT! randomNumber is not between 1-3!');

    return computerSelection;
}

function getComputerIcon() {
  let x;
  if (computerSelection === 'rock') {
    x = document.getElementById('computerRock');
    x.style.display = 'block';
  }
  else if (computerSelection === 'paper') {
    x = document.getElementById('computerPaper');
    x.style.display = 'block';
  }
  else {
    x = document.getElementById('computerScissors');
    x.style.display = 'block';
  };
}

function resetIcons() {
  document.getElementById('computerRock').style.display = 'none';
  document.getElementById('computerPaper').style.display = 'none';
  document.getElementById('computerScissors').style.display = 'none';
}

function resetWinLossMessage() {
  document.getElementById('winMessage').style.display = 'none';
  document.getElementById('lossMessage').style.display = 'none';
}

function showLoss() {
  let loss = document.createElement('div');
  loss.classList.add('lossMessage');
  loss.textContent = 'LOST';
  loss.style.textAlign = 'center';
  loss.style.fontSize = '5rem';
  text.appendChild(loss);
}

function showWin() {
  let x = document.getElementById('winMessage');
  x.style.display = 'block';
}

function showLoss() {
  let x = document.getElementById('lossMessage');
  x.style.display = 'block';
}

function playRound(playerSelection) {
  if (gameGoing === true) {
    resetIcons();
    getComputerChoice();
    getComputerIcon();

    if (playerSelection === 'rock' & computerSelection === 'paper' ||
        playerSelection === 'paper' & computerSelection === 'scissors' ||
        playerSelection === 'scissors' & computerSelection === 'rock') {
      ++scoreComputer;
      section.style.background = 'crimson';
    } else if (playerSelection === 'rock' & computerSelection === 'scissors' ||
                playerSelection === 'paper' & computerSelection === 'rock' ||
                playerSelection === 'scissors' & computerSelection === 'paper') {
      ++scorePlayer;
      section.style.background = 'green';
    } else {
      section.style.background = 'yellow';
    }

    let score = document.querySelector('.score');
    score.textContent = scorePlayer + ' : ' + scoreComputer;

    if (scorePlayer === 5) {
      score.textContent = scorePlayer + ' : ' + scoreComputer;
      section.style.background = 'greenyellow';
      showWin();
      return gameGoing = false;
    } else if (scoreComputer === 5) {
      score.textContent = scorePlayer + ' : ' + scoreComputer;
      section.style.background = 'red';
      showLoss();
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

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click', () => playRound('scissors'));

const playAgain = document.querySelector('.playAgain');
playAgain.addEventListener('click', () => {
    scorePlayer = 0;
    scoreComputer = 0;
    gameGoing = true;
    score = document.querySelector('.score');
    score.textContent = '';
    section.style.background = 'white';
    resetIcons();
    resetWinLossMessage();
});


