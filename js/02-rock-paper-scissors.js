
function game() {
    computerChoice = Math.floor(Math.random() * 3);
let userChoice =""; 
userChoice = prompt("Enter rock, paper or scissors:");
while (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
    userChoice = prompt("Invalid choice. Enter rock, paper or scissors:");
    if (userChoice !== null) {
        userChoice = userChoice.toLowerCase();
    }
}

if (computerChoice === 0) {
    computerChoice = 'rock';
} else if (computerChoice === 1) {
    computerChoice = 'paper';
} else if (computerChoice === 2) {
    computerChoice = 'scissors';
}

// Calculate outcome
if (userChoice === computerChoice) {
    alert("It's a tie!");
}
else if (userChoice === 'rock' && computerChoice === 'scissors') {
    alert("You win! Rock beats scissors.");
}
else if (userChoice === 'paper' && computerChoice === 'rock') {
    alert("You win! Paper beats rock.");
}
else if (userChoice === 'scissors' && computerChoice === 'paper') {
    alert("You win! Scissors beat paper.");
}
else {
    alert("You lose! " + computerChoice + " beats " + userChoice + ".");
}
}

let playAgain = "y";
do {
    game();
    do {
        playAgain = prompt("Do you want to play again? (y/n)", "y");
        if (playAgain !== null) {
            playAgain = playAgain.toLowerCase();
        }
    } while (playAgain !== "y" && playAgain !== "n");
} while (playAgain === "y");
console.log("Game ended by user.")

