/*----- constants -----*/
const generateButton = document.createElement("button");
generateButton.textContent = "Generate Random Word";
document.body.appendChild(generateButton);

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
}


    function generateRandomWord() {
        const words = ["boxful", "lengths", "jukebox", "jumbo", "snazzy", "jinx", "cobweb",
        "kayak", "zombie", "juicy"]

        const randomIndex = Math.floor(Math.random() * words.length);
        randomWord = words[randomIndex];

    // % Initiate an array of same length as word, but each character is an “_”.
        guessedWord = Array(randomWord.length).fill("_");

    // % Initialize variable attempts remaining = 10
        
        renderRandomWord();
        }

        function renderRandomWord() {
            randomWordEl.textContent = guessedWord.join("");
        }
        function renderLetters () {
            const letters = alphabet.split("");
            lettersContainer.innerHTML = "";

            letters.forEach(letter => {
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
                    attemptsRemaining --;
                }
                renderRandomWord();
                checkGameResult();
            } 
        }

        function checkGameResult() {
            if (guessedWord.join("") === randomWord) {
                console.log("YOU WIN!");
            } else if (attemptsRemaining === 0) {
                console.log("YOU LOSE!");
            }
        }

        // % While loop, runs while attempts remaining > 0
        // % Prompt user to press a button from the selection of letters a through z.
        
    // % For loop: number of iterations = length of word
            // % For each iteration, test whether the button selected by the player matches
            // a letter of the randomly generated word.
            // % End the loop.

            // % If Condition 1: check whether any letters matched,
            // % If true, variable “lives” is decreased by 1
        // % Else if: If letters do match,
            // % replace the “_” with said letter.

        //     for (let i = 0; i < wordLength; i++) {
        //         if (selectedLetter === randomWord[i]) {
        //             guessedWord[i] = selectedLetter;
        //         }
        //     }
            
        //     if (!guessedWord.includes(selectedLetter)) {
        //         attemptsRemaining --;
        //     }
    
        // // % If condition 2: check whether new string is equal to randomly generated word
        //     // % If true, Print “YOU WIN!” & end loop

        //     if (guessedWord.join("") === randomWord) {
        //         console.log("YOU WIN");
        //         break; // breaks the for loop
        //     }

        // % If condition 3: Check whether lives = 0
        // % If true, print “YOU LOSE” & end loop
    // % End while loop
           


  