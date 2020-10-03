# K-Culture-Trivia
Intro to Trivia Setup:
-There are 2 players and 100 questions about Korean culture
-Players alternate with each turn
-Each question lasts 15 seconds
-If the answer clicked is correct, the div would turn green, otherwise it would turn red 
-The score would be tallied at the end, whoever answers the most questions correctly wins the game

Approach Taken to Create the Game:
-I thought of 100 different questions about K-Pop, K-dramas, K-food and K-Geography
-I created a div container to put the questions and answer choices in and made individual divs for the question and answer choices
-I declared javascript variables for html elements that are used within the javascript
-I created a renderQuestion function to display the question from the array and the answer choices that come with the question
-I created a currentPlayerTurn function using template literals that was shown in the tic tac toe code-along with a handlePlayerChange function
-I set up a timer function for the countdown to work. I set the innerHTML of the div to i which is the variable for seconds. If i is less than 10 seconds, i decreases by 1 every second and prints time into div
-Once timer reaches 0, if the runningQuestion is less than the questions array then the next questions should populate with renderQuestion and reset time to 10 seconds and switch players
-I created a start function so that when the start button is clicked the renderQuestion, countDown and currentPlayer's turn would be displayed
-The following function would be the event function. If the userclick's answer is equal to the runningQuestion's answer then the current player score increases by one and switches to next player. If the runningQuestion is less than the length of questions array then the next question should load, switch players and reset timer to 10 seconds. The function should keep going until it reaches the end of the array in which the winningResult function and clearInterval should be called
-The last function to be written is the reset function that is tied to the start over button.The variables stated in the beginning of the game are set back to default values.


Unsolved Problems:
-removing previous player winner from game-result div

Things To Improve On/Add to the game in the future:
-allowing the userClick event to display red or green if answer wrong/correct
-random question generator
-moving game-result div to the center of the page