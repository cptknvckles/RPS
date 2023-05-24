const rockButton = document.getElementById('rockButton')
const paperButton = document.getElementById('paperButton')
const scissorButton = document.getElementById('scissorButton')
const compChoice = document.getElementById('c-choice')
const roundEl = document.getElementById('roundCount')
const gameStat = document.getElementById('gameHUD')
const playerShow = document.getElementById('playerPoints')
const AIShow = document.getElementById('computerPoints')
let playerScore = 0
let computerScore = 0

const gameConditions = {
    rock: { scissors: 'win', paper: 'lose' },
    paper: { rock: 'win', scissors: 'lose' },
    scissors: { paper: 'win', rock: 'lose' }
}

function playRound(playerSelection, computerSelection) {
    const result = gameConditions[playerSelection][computerSelection]
    switch (result) {
        case 'win':
            gameStat.innerHTML = `You Won! ${playerSelection} beats ${computerSelection}`
            playerScore++
            break

        case 'lose':
            gameStat.innerHTML = `You Lose! ${computerSelection} beats ${playerSelection}`
            computerScore++
            break

        default:
            gameStat.innerHTML = 'Tie!'
    }
}

function getComputerChoice() {
    let hand = ['rock', 'paper', 'scissors']
    let randomHand = hand[Math.floor(Math.random() * hand.length)]
    compChoice.innerHTML = `AI Chose ${randomHand}`;
    return randomHand
}

function game() {
    let round = 5

    function playGame(playerSelection) {
                const computerSelection = getComputerChoice();
                playRound(playerSelection, computerSelection);
                round--
                roundEl.innerHTML = `Rounds left: ${round}`;
                if (round === 0) {
                    playerShow.innerHTML = `You got ${playerScore} points`
                    AIShow.innerHTML = `AI got ${computerScore} Points`
                if (playerScore > computerScore) {
                    gameStat.innerHTML = "Congratulations! You won!";
                    gameStat.style.backgroundColor = 'red'
                } else if (computerScore > playerScore) {
                    gameStat.innerHTML = "Oops! You lost!";
                    gameStat.style.backgroundColor = 'red'
                } else {
                    gameStat.innerHTML = "It's a tie!";
                }
            }
    }

    rockButton.addEventListener('click', () => {
        playGame('rock');
    });

    paperButton.addEventListener('click', () => {
        playGame('paper');
    });

    scissorButton.addEventListener('click', () => {
        playGame('scissors');
    });
}

game();















// const rockButton = document.getElementById('rockButton')
// const paperButton = document.getElementById('paperButton')
// const scissorButton = document.getElementById('scissorButton')
// const compChoice = document.getElementById('c-choice')
// const roundEl = document.getElementById('roundCounter')
// const gameStat = document.getElementById('gameHUD')
// let playerChoice

// function game(){
//     let round = 5
//     for(let i = 0; i < 5; i++){
//         const playerSelection = playerChoice
//         const computerSelection = getComputerChoice()
//         playRound(playerSelection, computerSelection)
//         round--
//         roundEl.innerHTML = `Rounds left ${round}`;
//     }
// }

// rockButton.addEventListener('click', () => {
//     playerChoice = 'rock'
//     playRound(playerChoice, getComputerChoice())

    
// })
// paperButton.addEventListener('click', () => {
//     playerChoice = 'paper'
//     playRound(playerChoice, getComputerChoice())
// })
// scissorButton.addEventListener('click', () => {
//     playerChoice = 'scissor'
//     playRound(playerChoice, getComputerChoice())
// })
// const gameConditions = {
//     rock: {scissors: 'win', paper: 'lose'},
//     paper: {rock: 'win', scissors: 'lose'},
//     scissors: {paper: 'win', rock: 'lose'}
// }

// function playRound(playerSelection, computerSelection){
//     const result = gameConditions[playerSelection][computerSelection]
//     switch(result){
//         case 'win':
//             gameStat.innerHTML = `You Won! ${playerSelection} beats ${computerSelection}`
//         break

//         case 'lose':
//             gameStat.innerHTML = `You Lose! ${computerSelection} beats ${playerSelection}`
//         break
//         default:
//             gameStat.innerHTML = 'Tie!'
//     }   
// }

// function getComputerChoice(){
//     let hand = ['rock', 'paper', 'scissors']
//     let randomHand = hand[Math.floor(Math.random() * hand.length)]
//     compChoice.innerHTML =  `AI Chose ${randomHand}`;
//     return randomHand
    
// }



// game()
