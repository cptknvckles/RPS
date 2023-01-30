function getComputerChoice(){
    let hand = ['rock', 'paper', 'scissors']
    let randomHand = hand[Math.floor(Math.random() * hand.length)]
    console.log(`AI Chose ${randomHand}`);
    return randomHand
    
}


const gameConditions = {
    rock: {scissors: 'win', paper: 'lose'},
    paper: {rock: 'win', scissors: 'lose'},
    scissors: {paper: 'win', rock: 'lose'}
}

function playRound(playerSelection, computerSelection){
    const result = gameConditions[playerSelection][computerSelection]
    switch(result){
        case 'win':
            console.log(`You Won! ${playerSelection} beats ${computerSelection}`)
        break

        case 'lose':
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        break
        default:
            console.log('Tie!')
    }   
}


function game(){
    let round = 5
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt('Just Choose Paper')
        const computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection)
        round--
        console.log(`Rounds left ${round}`);
    }
}

game()

//take a random result for computer, rock paper or scissors