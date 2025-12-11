function getCompChoice () {
    let max = 3;
    let min = 1;
    let rand = Math.floor(Math.random() * (max) + min);
    console.log(rand);

    let compChoice;

    switch (rand) {
        case 1:
            compChoice = "rock"
            break;

        case 2:
            compChoice = "paper";
            break;

        case 3:
            compChoice = "scissors";
            break;
    }
    console.log(compChoice);
    return compChoice;
}

function getPlayerChoice () {
    let playerChoice = prompt("Please choose Rock, Paper, or Scissors");
    playerChoice = playerChoice.toLowerCase();
    console.log(playerChoice);
    return playerChoice;
}

function playRound (compChoice, playerChoice) {
    if (compChoice == "rock") {
        switch (playerChoice) {
            case "rock":
                console.log("Sorry thats a tie.")
                return 0;

            case "paper":
                console.log("You win this round!");
                return 1;

            case "scissors":
                console.log("You lose this round :(");
                return 2;
        }
    }

        if (compChoice == "paper") {
        switch (playerChoice) {
            case "rock":
                console.log("You lose this round :(");
                return 2;

            case "paper":
                console.log("Sorry thats a tie.");
                return 0;

            case "scissors":
                console.log("You win this round!");
                return 1;
        }
    }

        if (compChoice == "scissors") {
        switch (playerChoice) {
            case "rock":
                console.log("You win this round!");
                return 1;

            case "paper":
                console.log("You lose this round :(");
                return 2;

            case "scissors":
                console.log("Sorry thats a tie.");
                return 0;
        }
    }
}

let playerScore = 0;
let compScore = 0;

let round = playRound(getCompChoice(), getPlayerChoice());
switch (round) {
    case 0:
        console.log("Comp: ");
        console.log(compScore);
        console.log("Player: ");
        console.log(playerScore);
        break;
    
    case 1:
        playerScore = playerScore + 1;
        console.log("Comp: ");
        console.log(compScore);
        console.log("Player: ");
        console.log(playerScore);
        break;

    case 2:
        compScore = compScore + 1;
        console.log("Comp: ");
        console.log(compScore);
        console.log("Player: ");
        console.log(playerScore);
        break;
}

round = playRound(getCompChoice(), getPlayerChoice());
switch (round) {
    case 0:
        console.log("Comp: ");
        console.log(compScore);
        console.log("Player: ");
        console.log(playerScore);
        break;
    
    case 1:
        playerScore = playerScore + 1;
        console.log("Comp: ");
        console.log(compScore);
        console.log("Player: ");
        console.log(playerScore);
        break;

    case 2:
        compScore = compScore + 1;
        console.log("Comp: ");
        console.log(compScore);
        console.log("Player: ");
        console.log(playerScore);
        break;
}

round = playRound(getCompChoice(), getPlayerChoice());
switch (round) {
    case 0:
        console.log("Comp: ");
        console.log(compScore);
        console.log("Player: ");
        console.log(playerScore);
        break;
    
    case 1:
        playerScore = playerScore + 1;
        console.log("Comp: ");
        console.log(compScore);
        console.log("Player: ");
        console.log(playerScore);
        break;

    case 2:
        compScore = compScore + 1;
        console.log("Comp: ");
        console.log(compScore);
        console.log("Player: ");
        console.log(playerScore);
        break;
}

round = playRound(getCompChoice(), getPlayerChoice());
switch (round) {
    case 0:
        console.log("Comp: ");
        console.log(compScore);
        console.log("Player: ");
        console.log(playerScore);
        break;
    
    case 1:
        playerScore = playerScore + 1;
        console.log("Comp: ");
        console.log(compScore);
        console.log("Player: ");
        console.log(playerScore);
        break;

    case 2:
        compScore = compScore + 1;
        console.log("Comp: ");
        console.log(compScore);
        console.log("Player: ");
        console.log(playerScore);
        break;
}

round = playRound(getCompChoice(), getPlayerChoice());
switch (round) {
    case 0:
        console.log("Comp: ");
        console.log(compScore);
        console.log("Player: ");
        console.log(playerScore);
        break;
    
    case 1:
        playerScore = playerScore + 1;
        console.log("Comp: ");
        console.log(compScore);
        console.log("Player: ");
        console.log(playerScore);
        break;

    case 2:
        compScore = compScore + 1;
        console.log("Comp: ");
        console.log(compScore);
        console.log("Player: ");
        console.log(playerScore);
        break;
}