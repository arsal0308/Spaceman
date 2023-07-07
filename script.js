/*----- constants -----*/
const generateButton = document.createElement("button");
generateButton.textContent = "Generate Random Word";
document.body.appendChild(generateButton);

const resetButton = document.createElement("button");
resetButton.textContent = "Reset Game";
document.body.appendChild(resetButton);

const resultEl = document.createElement("p");
resultEl.id = "randomWord";
document.body.appendChild(resultEl);

const lettersContainer = document.createElement("div");
lettersContainer.id = "lettersContainer";
document.body.appendChild(lettersContainer);

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/*----- app's state (variables) -----*/
let randomWord = "";
let guessedWord = [];
let attemptsRemaining = 10;
/*----- cached element references -----*/
const randomWordEl = document.getElementById("randomWord");

/*----- event listeners -----*/
generateButton.addEventListener("click", startNewGame);
resetButton.addEventListener("click", resetGame);
/*----- functions -----*/

// Identify and initialize state variables.
// Code the main render(), renderScores() & renderResults() functions.
// Code the click event listener, including the win logic.
// Update the renderResults() function to render the winner border.

// Player presses "New Game" button

// % Prompt user to click generate random word
function startNewGame() {
  generateRandomWord();
  renderLetters();
  resultEl.textContent = "";
  resultEl.classList.remove("win", "lose");
}

function generateRandomWord() {
  const words = [
    "boxful",
    "lengths",
    "jukebox",
    "jumbo",
    "snazzy",
    "jinx",
    "cobweb",
    "kayak",
    "zombie",
    "juicy",
  ];

  const randomIndex = Math.floor(Math.random() * words.length);
  randomWord = words[randomIndex].toUpperCase();

  // % Initiate an array of same length as word, but each character is an “_”.
  guessedWord = Array(randomWord.length).fill("_");

  // % Initialize variable attempts remaining = 10

  renderRandomWord();
}

function renderRandomWord() {
  randomWordEl.textContent = guessedWord.join("");
}
function renderLetters() {
  const letters = alphabet.split("");
  lettersContainer.innerHTML = "";

  letters.forEach((letter) => {
    const button = document.createElement("button");
    button.textContent = letter;
    button.addEventListener("click", () => selectLetter(letter));
    lettersContainer.appendChild(button);
  });
}

function selectLetter(letter) {
  if (attemptsRemaining > 0 && !guessedWord.includes(letter)) {
    let matched = false;
    for (let i = 0; i < randomWord.length; i++) {
      if (randomWord[i] === letter) {
        guessedWord[i] = letter;
        matched = true;
      }
    }
    if (!matched) {
      attemptsRemaining--;
    }
    renderRandomWord();
    checkGameResult();
  }
}

function checkGameResult() {
    if (guessedWord.join("") === randomWord) {
      resultEl.textContent = "You Win!";
      resultEl.classList.add("win");
    } else if (attemptsRemaining === 0) {
      resultEl.textContent = "You Lose!";
      resultEl.classList.add("lose");
    }
  }

function resetGame() {
  resultEl.textContent = "";
  resultEl.classList.remove("win", "lose");

  randomWord = "";
  guessedWord = [];
  attemptsRemaining = 10;
  randomWordEl.textContent = "";
  lettersContainer.innerHTML = "";
}
