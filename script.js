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
    "abruptly", "absurd", "abyss", "affix", "askew", "avenue", "awkward", "axiom", "azure", "bagpipes",
    "bandwagon", "banjo", "bayou", "beekeeper", "bikini", "blitz", "blizzard", "boggle", "bookworm",
    "boxcar", "boxful", "buckaroo", "buffalo", "buffoon", "buxom", "buzzard", "buzzing", "buzzwords",
    "caliph", "cobweb", "cockiness", "croquet", "crypt", "curacao", "cycle", "daiquiri", "dirndl",
    "disavow", "dizzying", "duplex", "dwarves", "embezzle", "equip", "espionage", "euouae", "exodus",
    "faking", "fishhook", "fixable", "fjord", "flapjack", "flopping", "fluffiness", "flyby", "foxglove",
    "frazzled", "frizzled", "fuchsia", "funny", "gabby", "galaxy", "galvanize", "gazebo", "giaour",
    "gizmo", "glowworm", "glyph", "gnarly", "gnostic", "gossip", "grogginess", "haiku", "haphazard",
    "hyphen", "iatrogenic", "icebox", "injury", "ivory", "ivy", "jackpot", "jaundice", "jawbreaker",
    "jaywalk", "jazziest", "jazzy", "jelly", "jigsaw", "jinx", "jiujitsu", "jockey", "jogging",
    "joking", "jovial", "joyful", "juicy", "jukebox", "jumbo", "kayak", "kazoo", "keyhole", "khaki",
    "kilobyte", "kiosk", "kitsch", "kiwifruit", "klutz", "knapsack", "larynx", "lengths", "lucky",
    "luxury", "lymph", "marquis", "matrix", "megahertz", "microwave", "mnemonic", "mystify", "naphtha",
    "nightclub", "nowadays", "numbskull", "nymph", "onyx", "ovary", "oxidize", "oxygen", "pajama",
    "peekaboo", "phlegm", "pixel", "pizazz", "pneumonia", "polka", "pshaw", "psyche", "puppy",
    "puzzling", "quartz", "queue", "quips", "quixotic", "quiz", "quizzes", "quorum", "razzmatazz",
    "rhubarb", "rhythm", "rickshaw", "schnapps", "scratch", "shiv", "snazzy", "sphinx", "spritz",
    "squawk", "staff", "strength", "strengths", "stretch", "stronghold", "stymied", "subway", "swivel",
    "syndrome", "thriftless", "thumbscrew", "topaz", "transcript", "transgress", "transplant",
    "triphthong", "twelfth", "twelfths", "unknown", "unworthy", "unzip", "uptown", "vaporize",
    "vixen", "vodka", "voodoo", "vortex", "voyeurism", "walkway", "waltz", "wave", "wavy", "waxy",
    "wellspring", "wheezy", "whiskey", "whizzing", "whomever", "wimpy", "witchcraft", "wizard",
    "woozy", "wristwatch", "wyvern", "xylophone", "yachtsman", "yippee", "yoked", "youthful",
    "yummy", "zephyr", "zigzag", "zigzagging", "zilch", "zipper", "zodiac", "zombie"
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
    resultEl.innerHTML = `You Lose! The word was ${randomWord}`;
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
