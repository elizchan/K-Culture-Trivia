# K-Culture-Trivia
Intro to Trivia Setup
-There are 2 players and 100 questions about Korean culture
-Players alternate with each turn
-Each question lasts 15 seconds
-If the answer clicked is correct, the div would turn green, otherwise it would turn red 
-The score would be tallied at the end, whoever answers the most questions correctly wins the game

Approach Taken to Create the Game
-I thought of 100 different questions about K-Pop, K-dramas, K-food and K-Geography
-I created a div container to put the questions and answer choices in and made individual divs for the question and answer choices
-I declared javascript variables for html elements that are used within the javascript
-I created a renderQuestion function to display the question from the array and the answer choices that come with the question
-I created a currentPlayerTurn function using template literals that was shown in the tic tac toe code-along with a handlePlayerChange function
-I set up a timer function for the countdown to work. I set the innerHTML of the div to i which is the variable for seconds. If i is less than 10 seconds, i decreases by 1 every second and prints time into div
