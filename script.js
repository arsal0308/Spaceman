/*----- constants -----*/
const generateButton = document.createElement("button");
generateButton.innerHTML = "Generate Random Word";
document.body.appendChild(generateButton);

const resetButton = document.createElement("button");
resetButton.innerHTML = "Reset Game";
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
function startNewGame() {
  generateRandomWord();
  renderLetters();
  resultEl.innerHTML = "";
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
  guessedWord = Array(randomWord.length).fill("_");
  renderRandomWord();
}
function renderRandomWord() {
  randomWordEl.innerHTML = guessedWord.join("");
}
function renderLetters() {
  const letters = alphabet.split("");
  lettersContainer.innerHTML = "";

  letters.forEach((letter) => {
    const button = document.createElement("button");
    button.innerHTML = letter;
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
    resultEl.innerHTML = "You Win!";
  } else if (attemptsRemaining === 0) {
    resultEl.innerHTML = "You Lose!";
  }
}
function resetGame() {
  resultEl.innerHTML = "";
  resultEl.classList.remove("win", "lose");

  randomWord = "";
  guessedWord = [];
  attemptsRemaining = 10;
  randomWordEl.innerHTML = "";
  lettersContainer.innerHTML = "";
}
