function getComputerChoice() {
    // random integer from [1 - 3]. formula Math.round(Math.random() * (end - start) + start)
    let random = Math.round(Math.random() * (3 - 1) + 1);
    if (random == 1) {
        return "Rock";
    } else if (random == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    alert(`
        1 for "Rock"
        2 for "Paper"
        3 for "Scissors"    
    `);
    let choice = prompt("Your choice: ");
    if (choice == 1) {
        return "Rock";
    } else if (choice == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playGame() {
    let humanScore = 0, computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if ((humanChoice == "Scissors" && computerChoice == "Rock") ||
            (humanChoice == "Paper" && computerChoice == "Scissors") ||
            (humanChoice == "Rock" && computerChoice == "Paper")) {
            console.log(`You lose! ${humanChoice} is beaten by ${computerChoice}`);
            ++computerScore;
        } else if ((humanChoice == "Rock" && computerChoice == "Scissors") ||
            (humanChoice == "Paper" && computerChoice == "Rock") ||
            (humanChoice == "Scissors" && computerChoice == "Paper")) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            ++humanScore;
        } else {
            console.log(`You draw! ${humanChoice} is drawn to ${computerChoice}`);
        }
    }

    for (let i = 1; i <= 5; ++i) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (humanScore < computerScore) {
        console.log("You lose!");
    } else {
        console.log("You draw!");
    }
}