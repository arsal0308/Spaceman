# Spaceman
Game Description:
This is a single player game of Spaceman



Pseudocode:

1. Generate a word generator at random and store each character as an array
3. Show the length of the random word to the player as "_"
4. Set attempts variable to 10 for the 10 components of the spaceship
5. Each component will be displayed individually according to the number of wrong guesses 
6. Prompt the player to guess a letter
7. For loop corresponds to the length of the generated word
8. See if character entered by the player matches a character in the word
9. Replace “_” with the matched character, otherwise decrease attempts remaining by 1 for each incorrect guess
10. If the string created matches the generated word, then display “YOU WIN!”
11. Otherwise if attempts remaining = 0 display “YOU LOSE!” 
