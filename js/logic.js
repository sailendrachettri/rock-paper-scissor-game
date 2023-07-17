let playerCount = document.getElementById('playerCount'); // score of the player
let computerCount = document.getElementById('computerCount'); // score
let movesLeft = document.getElementById('movesLeft'); // no of moves display
let resultSection = document.getElementById('resultSection');
let gameSection = document.getElementById('gameSection');

let playerGets = document.getElementById('playerGets');
let computerGets = document.getElementById('computerGets');

let rockBtn = document.getElementById('rockBtn');
let paperBtn = document.getElementById('paperBtn');
let scissorBtn = document.getElementById('scissorBtn');

// VARIABLES
let moveCount = 16;
let playerScore = 0;
let computerScore = 0;
movesLeft.innerHTML = moveCount

// rock: 0 for Rock
// paper: 1 for Paper
// scissor: 2 for Scissor

const handleRock = () => {
    const playerChoice = 'rock'
    const computerChoice = playComputer()

    if (playerChoice === 'rock' && computerChoice === 0) {
        moveCount++

    } else if (playerChoice === 'rock' && computerChoice === 1) {
        computerScore += 1
    } else if (playerChoice === 'rock' && computerChoice === 2) {
        playerScore += 1
    }

    moveCount--

    playerCount.innerHTML = playerScore
    computerCount.innerHTML = computerScore
    movesLeft.innerHTML = moveCount
    // setting the player information
    displayComputerGetInfo(computerChoice)
    playerGets.innerHTML = 'Rock'

    if (moveCount === 0)
        displayWinner();
}

const handlePaper = () => {
    const playerChoice = 'paper'
    const computerChoice = playComputer()

    if (playerChoice === 'paper' && computerChoice === 0) {
        playerScore += 1;
    } else if (playerChoice === 'paper' && computerChoice === 1) {
        moveCount++
    } else if (playerChoice === 'paper' && computerChoice === 2) {
        computerScore += 1
    }

    moveCount--

    playerCount.innerHTML = playerScore
    computerCount.innerHTML = computerScore
    movesLeft.innerHTML = moveCount

    // setting the player information
    displayComputerGetInfo(computerChoice)
    playerGets.innerHTML = 'Papper'

    if (moveCount === 0)
        displayWinner();
}

const handleScissor = () => {
    const playerChoice = 'scissor'
    const computerChoice = playComputer()

    if (playerChoice === 'scissor' && computerChoice === 0) {
        computerScore += 1

    } else if (playerChoice === 'scissor' && computerChoice === 1) {
        playerScore += 1
    } else if (playerChoice === 'scissor' && computerChoice === 2) {
        moveCount++
    }

    moveCount--

    playerCount.innerHTML = playerScore
    computerCount.innerHTML = computerScore
    movesLeft.innerHTML = moveCount
    // setting the player information
    displayComputerGetInfo(computerChoice)
    playerGets.innerHTML = 'Scissor'

    if (moveCount === 0)
        displayWinner();
}

// FUNCTION FOR COMPUTER PLAYER
const playComputer = () => {
    return Math.floor((Math.random() * 3))
}

// DISPLAY THE WINNER RESULT
const displayWinner = () => {
    if (computerScore > playerScore) {
        gameSection.innerHTML = 'Computer WON the game with socre of ' + computerScore;

    } else if (computerScore < playerScore) {
        gameSection.innerHTML = 'Player WON the game with socre of ' + playerScore;

    } else
        gameSection.innerHTML = 'MATCH DRAW!  with socre of ' + playerScore;
}

const displayComputerGetInfo = (value) => {
    let val = "";
    const computerChoice = value

    if (computerChoice === 0) {
        val = 'Rock'
    } else if (computerChoice === 1) {
        val = 'Paper'
    } else {
        val = 'Scissor';
    }

    computerGets.innerHTML = val
}