const validChoices = ["rock", "paper", "scissors"];
let userpoints, computerpoints;
userpoints = 0;
computerpoints = 0;

function getComputerChoice () {
    let z = Math.random()
    return (z <= 0.333) ? "rock" :
           (z <= 0.666) ? "paper" :
           "scissors";
}

function getWinner (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return ("draw")
    } else if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return ("computer")

        } else {
            return ("user")
        }

    } else if (userChoice === "paper") {
        if (computerChoice === ("scissors")) {
            return ("computer")

        } else {
            return ("user")
        }


    } else if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return ("computer")
        
        } else {
            return ("user")
        }
    }
}

function getMostPoints () {
    if (userpoints > computerpoints) {
        return("user")
    } else {
        return("computer")
    }
}

function getNumberofPoints () {
    if (getMostPoints() === "user") {
        return(userpoints)
    } else {
        return(computerpoints)
    }
}

function gameLoop () {
    let userChoice = prompt ("Make your pick : Rock/Paper/Scissors").toLowerCase()
    if (validChoices.includes(userChoice)) {
        let computerChoice = getComputerChoice();
        let winner = getWinner(userChoice, computerChoice);
        if (winner === "user") {
            userpoints++;
        } else {
            computerpoints++;
        }
        if (userpoints < 5 && computerpoints < 5) {
            alert("You've played: " + userChoice + "\n"
            + "Computer has played: " + computerChoice + "\n"
            + "The winner is: " + winner + "\n" 
            + "User points=" + userpoints + "\n"
            + "Computer points= " + computerpoints)
            gameLoop()
        } else {
            alert("Game is over, winner is " + getMostPoints() + " with " + getNumberofPoints() + " points")
        }
        
    } else {
        alert("Please make a valid choice");
        gameLoop ()
    }
}


gameLoop()





