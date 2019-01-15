/*
GAME FUNCTION
- Player must guess btw a min and max
- Player gets certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/


// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message'),
      guessBtn = document.querySelector('#guess-btn');


// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen to guess events
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  // Validate the input field
  if(isNaN(guess) || guess < min || guess > max ){
    setMessage(`Please enter number between ${min} and ${max}`, 'red');
    }

  // Check if its the winning number or won
  if (guess === winningNum){
    // Disable input
    guessInput.disabled = true;

    // Change border color
    guessInput.style.borderColor = 'green';

    // Let the user know that they won
    setMessage(`${winningNum} is correct. YOU WIN!`, 'green');
  }else {

  }
  }
);

// Create setMessage function
function setMessage(msg, color) {
message.textContent = msg;
message.style.color = color;
}