// Use this game on console.
while (true) {
    const computerNumber = Math.floor(Math.random() * 1200) + 1;
    const userInput = parseInt(prompt("Enter a number:"));

    if (userInput > computerNumber) {
        console.log("Your guess is too high");
        console.log(`You are the winner! Your guess: ${userInput}, Computer's number: ${computerNumber}`);
    } else if (userInput < computerNumber) {
        console.log("Your guess is too low");
        console.log(`Computer wins this game. Your guess: ${userInput}, Computer's number: ${computerNumber}`);
    } else {
        console.log("Both of them have the same number");
        console.log(`Computer's number and your guess: ${computerNumber}, ${userInput}`);
    }

    const playAgain = prompt("Do you want to play again? (yes/no):");
    if (playAgain.toLowerCase() !== "yes") {
        break;
    }
}
