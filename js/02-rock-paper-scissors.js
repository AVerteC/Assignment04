function getUserChoice() {
    let userChoice = "";
    do {
        userChoice = prompt("Enter rock, paper, or scissors:");
        if (userChoice !== null) {
            userChoice = userChoice.toLowerCase();
        }
    } while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors" && userChoice !== null);
    
    // if userChoice is null that means they clicked the cancel button
    return userChoice;
}

function game() {
    // Collect user choice
    let userChoice = getUserChoice();
    if (userChoice === null) {
        alert("User canceled input. Game ended.")
        return;
    }

    // Collect computer choice
    let computerChoice = Math.floor(Math.random() * 3);
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
        alert("You win! Rock destroys scissors.");
    }
    else if (userChoice === 'paper' && computerChoice === 'rock') {
        alert("You win! Paper covers rock.");
    }
    else if (userChoice === 'scissors' && computerChoice === 'paper') {
        alert("You win! Scissors cut paper.");
    }
    else if (computerChoice === 'rock' && userChoice === 'scissors'){
        alert(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} destroys ${userChoice}.`);
    }
    else if (computerChoice === 'paper' && userChoice === 'rock'){
        alert(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} covers ${userChoice}.`);
    }
    else if (computerChoice === 'scissors' && userChoice === 'paper'){
        alert(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} cut ${userChoice}.`);
    }
}

game();

// Replay game loop
// let playAgain = "y";
// do {
//     game();
//     do {
//         playAgain = prompt("Do you want to play again? (y/n)", "y");
//         if (playAgain !== null) {
//             playAgain = playAgain.toLowerCase();
//         }
//     } while (playAgain !== "y" && playAgain !== "n");
// } while (playAgain === "y");
// console.log("Game ended by user.")

