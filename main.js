function playGame() {
    let playerScore = 0, computerScore = 0;
    let res = document.querySelector('div.result');
    let choices = document.querySelectorAll('#choice button');
    let player_score = document.querySelector('.player .score');
    let computer_score = document.querySelector('.computer .score');
    let player_choice = document.querySelector('.player.choice');
    let computer_choice = document.querySelector('.computer.choice');
    const computerChoice = ['Rock', 'Paper', 'Scissors'];

    function playRound(playerChoice, computerChoice) {
        res.classList.remove('greenText', 'redText');
        if ((playerChoice == "Scissors" && computerChoice == "Rock") ||
            (playerChoice == "Paper" && computerChoice == "Scissors") ||
            (playerChoice == "Rock" && computerChoice == "Paper")) {
            res.classList.add('redText');
            res.textContent = `You lose!`;
            ++computerScore;
        } else if ((playerChoice == "Rock" && computerChoice == "Scissors") ||
            (playerChoice == "Paper" && computerChoice == "Rock") ||
            (playerChoice == "Scissors" && computerChoice == "Paper")) {
            res.classList.add('greenText');
            res.textContent = `You win!`;
            ++playerScore;
        } else {
            res.textContent = `Tie!`;
        }

        player_choice.textContent = `Player: ${playerChoice}`;
        computer_choice.textContent = `Computer: ${computerChoice}`;
        player_score.textContent = `${playerScore}`;
        computer_score.textContent = `${computerScore}`;

        if (playerScore == 5 || computerScore == 5) {
            if (playerScore == 5) {
                res.textContent = 'Player win game!';
                alert('Player win game!');
            } else if (computerScore == 5) {
                res.textContent = 'Computer win game!';
                alert('Computer win game!');
            }
            choices.forEach(button=>{
                button.removeEventListener('click', playButton);
            })
        }
    }

    function playButton(e) {
        playRound(e.target.className, computerChoice[Math.floor(Math.random() * 2)]);
    }

    choices.forEach(button=>{
        button.addEventListener('click', playButton);
    })
}

let newGame = document.querySelector('.new-game button');
newGame.addEventListener('click', playGame);