'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const stateChange = function (numbWidth, numbSymbol, bgCol) {
  document.querySelector('.number').style.width = numbWidth;
  document.querySelector('.number').textContent = numbSymbol;
  document.querySelector('body').style.backgroundColor = bgCol;
};

// INITIAL CONDITIONS - STATE
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  stateChange('15rem', '?', '#222');
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   const messageBox = document.querySelector('.message').textContent;

  // Guess is NO input
  if (!guess) {
    displayMessage('🔞 No Number');

    // Guess is OUT OF RANGE
  } else if (guess < 1 || guess > 20) {
    displayMessage('🚀 Out of Range');

    // Guess is CORRECT
  } else if (guess === secretNumber) {
    displayMessage('😎 Correct!!!');
    stateChange('25rem', secretNumber, '#60b347');

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // Guess is different
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😿 Game Over');
    }
  } else {
    displayMessage('❌ Something is wrong');
  }
});
