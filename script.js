function getComputerChoice() {
    // Generate a random number between 1 and 3
    let choice = Math.floor( Math.random() * 3 )

    switch(choice) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    
    // Display result message depending on win, lose, or tie
    function displayResult(status) {
        if(status == 1) {
            return "Player wins! " + playerSelection + " beats " + computerSelection
        }
        else if (status == -1) {
            return "Computer wins! " + playerSelection + " loses to " + computerSelection
        }
        else if (status == 0) {
            return "It's a tie! " + playerSelection + " can not beat " + computerSelection
        }
    }

    let p = playerSelection.toLowerCase()

    // handle every possible outcome
    switch(true) {
        // if player chooses Rock
        case (p == "rock" && computerSelection == "Rock"):
            return displayResult(0)
        case (p == "rock" && computerSelection == "Paper"):
            return displayResult(-1)
        case (p == "rock" && computerSelection == "Scissors"):
            return displayResult(1)
        
        // if player chooses Paper
        case (p == "paper" && computerSelection == "Rock"):
            return displayResult(1)
        case (p == "paper" && computerSelection == "Paper"):
            return displayResult(0)
        case (p == "paper" && computerSelection == "Scissors"):
            return displayResult(-1)
        
        // if player chooses Scissors
        case (p == "scissors" && computerSelection == "Rock"):
            return displayResult(-1)
        case (p == "scissors" && computerSelection == "Paper"):
            return displayResult(1)
        case (p == "scissors" && computerSelection == "Scissors"):
            return displayResult(0)
    }
}
