//defined starting position of the trivia and will record what question the trivia is on
let runningQuestion = 0

//defined starting score as 0
let playerOne = 0
let playerTwo = 0

//defined current player
let currentPlayer = "playerOne"

//grabbed html elements and gave them variables
const gameContainer = document.querySelector('.game-container')
const question = document.getElementById("question")
const choiceA = document.getElementById("A")
const choiceB = document.getElementById("B")
const choiceC = document.getElementById("C")
const choiceD = document.getElementById("D")
const statusDisplay = document.querySelector('.status-display')

//function for current player's turn
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`

//array of questions
const questions = [
    {
        question: "What year was BTS found?",
        a: "2018",
        b: "2013",
        c: "2016",
        d: "2017",
        answer: "b"
    },
    {
        question: "What year did BTS first get top Social Artist Award at the Billboard Music Awards?",
        a: "2019",
        b: "2020",
        c: "2018",
        d: "2016",
        answer: "c"
    },
    {
        question: "Which group is not a group that was founded in 2018-2020?",
        a: "Ateez",
        b: "Everglow",
        c: "SF9",
        d: "Itzy",
        answer: "c"
    },
    {
        question: "What entertainment company is BlackPink under?",
        a: "SM Entertainment",
        b: "BigHit Labels",
        c: "JYP Entertainment",
        d: "YG Entertainment",
        answer: "d"
    }
]

//created a function to display question being asked
// const renderQuestion = () => {
//     //Math.floor(Math.random() * questions.length)
//     let q = questions[runningQuestion]
//     question.innerHTML = q.question
//     choiceA.innerText = q.a
//     choiceB.innerText = q.b
//     choiceC.innerText = q.c
//     choiceD.innerText = q.d
// }

//-------TIMER------------------------//
//set time for question to be answered to 10 seconds
let i = 10
//function for how the countdown works with the rendered question
const countDown = () => {
    if (i >= 0){
        const timerDiv=document.querySelector('.timer')
        timerDiv.innerHTML = i
        i--
    }else{
        wrongAnswer()
        if(runningQuestion < questions.length){
            runningQuestion++
            //renderQuestion()
            return i = 10
        }else{
            clearInterval(timer)
        }
    }
}
// const countDown = () => {
//     //console.log(i)
//     if(i >= 0){
//         const timerDiv = document.querySelector('.timer')
//         timerDiv.innerHTML = i
//         i--
//     }else{
//         wrongAnswer()
//         if(runningQuestion < questions.length){
//             //runningQuestion++
//             //renderQuestion()
//             handlePlayerChange()
//             return i=10
//         }else{
//             //end the trivia and display score
//             clearInterval(timer)
//             //scoreTotal()
//         }
//     }
// }

//-------GAME PLAY----------//
//function to start game
const startGameButton = document.querySelector('.game-start')
const startGame = () => {
    //enderQuestion()
    countDown()
    let timer = setInterval(countDown, 1000)
    statusDisplay.innerHTML = currentPlayerTurn()
}
startGameButton.addEventListener('click', startGame)

//function to switch players
function handlePlayerChange() {
    currentPlayer = currentPlayer === "playerOne" ? "playerTwo" : "playerOne"
    statusDisplay.innerHTML = currentPlayerTurn()
}

// const getAnswer = (event) => {
   
//     if(event === questions[runningQuestion].answer){
//         score++
//         correctAnswer()
//     }else{
//         wrongAnswer()
//     }
//     if(runningQuestion < questions.length){
//         runningQuestion++
//         //renderQuestion()
//         return i=10
//     }else{
//         clearInterval(timer)
//         //scoreTotal()
//     }
//     handlePlayerChange()
// }
const correctAnswer = () => {
    document.getElementById().style.color = "green"
    alert("Correct answer!")
}
const wrongAnswer = () => {
    alert("wrong answer!")
}
//---------WIN LOGIC---------------//
//function to display end game results
const winningResult = () => {
    let gameResult = document.querySelector('.game-result')
    if(playerOne > playerTwo){
        gameResult.innerHTML = "Player One Wins!"
    }else if(playerOne < playerTwo){
        gameResult.innerHTML = "Player Two Wins!"
    }else{
        gameResult.innerHTML = "Game ends in a tie!"
    }
}
//-----RESTART GAME-------//
//function to restart game
const restartGame = () => {
    let runningQuestion = 0
    let playerOne = 0
    let playerTwo = 0
    currentPlayer = "playerOne"
    statusDisplay.innerHTML = currentPlayerTurn()
}
//button to restart game when it is over
document.querySelector('.game-reset').addEventListener('click', restartGame)