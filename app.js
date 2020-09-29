//defined 2 players
let playerOne = []
let playerTwo = []

//function to generate room code
const getCode = () => {
    const h2Code = document.querySelector('.code')
    h2Code.innerHTML = 'Room Code: ' + Math.random().toString(36).substr(2, 5)
}
getCode()

//function to start game



//create an array of 100 objects(questions)

//button to restart game when it is over
//document.querySelector('.game-reset').addEventListener('click', )