function getComputerChoice() {
    // Generate a random number between 0 and 2
    // with 0 being rock, 1 being paper, and 2 being scissors
    return Math.floor( Math.random() * 3 )
}

function playRound(p, c) {
    if (p == c) {
        return 0
    }

    // handle every possible outcome
    switch(true) {
        // if player chooses Rock
        case (p == 0 && c == 1):
            return -1
        case (p == 0 && c == 2):
            return 1
        
        // if player chooses Paper
        case (p == 1 && c == 0):
            return 1
        case (p == 1 && c == 2):
            return -1
        
        // if player chooses Scissors
        case (p == 2 && c == 0):
            return -1
        case (p == 2 && c == 1):
            return 1
    }
}

function parseChoice(choice) {
    let choices = ["Rock", "Paper", "Scissors"]
    return choices[choice]
}

// Greet console with document header
console.log(document.querySelector('h1').innerHTML)

let btns = document.querySelectorAll('button')

let playerScore = 0
let computerScore = 0
let drawScore = 0
let round = 0

const roundCounter = document.querySelector('#round')
const playerCounter = document.querySelector('#player')
const computerCounter = document.querySelector('#computer')
const drawCounter = document.querySelector('#draw')

const play = function() {
    roundCounter.textContent = `Round: ${++round}`
    
    let choice = this.value
    let playerSelection = choice
    
    let computerSelection = getComputerChoice();
    
    let result = playRound(playerSelection, computerSelection)
    
    
    switch(result) {
        case 0:
            drawScore++
            break
        case 1:
            playerScore++
            break
        case -1:
            computerScore++
            break
    }
    playerCounter.textContent = `Player: ${playerScore}`
    computerCounter.textContent = `Computer: ${computerScore}`
    drawCounter.textContent = `Draw: ${drawScore}`
}

const checkScore = function() {
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore == 5) {
            document.body.insertAdjacentHTML("beforeend", "<div>Player Won!!!</div>")
        }
        else if (computerScore == 5) {
            document.body.insertAdjacentHTML("beforeend", "<div>Computer Won!!!</div>")
        }

        btns.forEach(btn => {
            btn.removeEventListener('click', play)
            btn.removeEventListener('click', checkScore)
        })

    }
}

btns.forEach(btn => {
    btn.addEventListener('click', play)
    btn.addEventListener('click', checkScore)
});

