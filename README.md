# K-Culture-Trivia

### App Demo: https://elizchan.github.io/K-Culture-Trivia/

## Concept:
A 100 question trivia about anything Korean culture(music, drama/movie, food and geography) played between 2 people using the same browser!
###### General play of game:
* Players alternate with each turn
* Each question lasts 10 seconds
* The score would be tallied at the end, whoever answers the most questions correctly wins the game

## Technologies Used:
* HTML
* CSS
* JavaScript

## Approach:

#### Overview

#### Wireframe
<img src="https://i.ibb.co/n8Z38qX/20201003-102137.jpg" alt="20201003-102137" border="0">

#### User stories
* As a user I expect to see an image at the top center of the page with the title of the game beneath it
* As a user I expect to see a div in the center of the page with 6 separate divs in the container: 1 for question, 4 answer choices and 1 timer countdown
* As a user I expect to see a start game button and restart game button with a div in between the two buttons that say Winner: and score display
* As a user I expect to see the first question with answer choices once the start game button is clicked, the countdown timer to run from 10 seconds and an indicator of who's turn it is currently
* As a user I expect the next question to show up after the answer is clicked and for the timer to automatically reset and see the score display to be updated with each turn
* As a user I expect the restart game button to let user go back to the first question and reset the score
* As a user I expect the winner to be displayed at the end of the game

#### Development Plan
* I thought of 100 different questions about K-Pop, K-dramas, K-food and K-Geography and created game layout
* I created the html and css setup for how the game should look like
* The third step was to start the javascript coding: first by setting up global variables and making an array of 100 objects for the question and answer choices with the correct answer
* The fourth step was to create a function for the questions to show in the divs, a countdown timer that automatically resets with each turn, restart game function, handle player change, keeping scores and the gameplay function
* The last step was to create a winning game logic function

### Unsolved Problems:
* removing previous player winner from game-result div

### Things To Improve On/Add to the game in the future:
* allowing the userClick event to display red or green if answer wrong/correct
* random question generator
* moving game-result div to the center of the page

## Challenges:
One challenge I had was that the restart button was not resetting the game to question 1 of the array but to question 2. The problem was fixed after I combined the reset game function to the begining of the start game function and calling the function with the reset button event

### App Demo: https://elizchan.github.io/K-Culture-Trivia/
