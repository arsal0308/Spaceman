# Spaceman
Game Description:
This is a single player game of Spaceman. The game is played by clicking the
"Generate Random Word" button which will store a random word unknown to the player. 
The player will be able to see how many letters the word consists of indicated by 
the number of blank spaces. The player will be able to select a letter from A through Z as buttons on the screen. 
For each correct guess of a letter the word contains, the
blank space will be filled by that letter. Otherwise, if a guess is incorrect, the button to select
the letter will be greyed out and part of the spaceship will appear. The player 
will continue to select letters until either the word is correctly guessed in which 
case the player wins, else the spaceship will fully appear indicating the player has lost. 
Good luck!



Pseudocode:

1. Generate a word generator at random and store each character as an array
3. Show the length of the random word to the player as "_"
4. Set attempts variable to 10 for the 10 components of the spaceship
5. Each component will be displayed individually according to the number of wrong guesses 
6. Prompt the player to select a letter
7. For loop corresponds to the length of the generated word
8. See if the letter selected by the player matches a letter in the word
9. Replace “_” with the matched letter, otherwise decrease attempts remaining by 1 for each incorrect guess
10. If the string created matches the generated word, then display “YOU WIN!”
11. Otherwise if attempts remaining = 0 display “YOU LOSE!” 
