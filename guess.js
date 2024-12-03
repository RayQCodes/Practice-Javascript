const minimum = 1;
const maximum = 3;
let running = true;
let guess;1
let attempts = 0;
const answer = Math.floor(Math.random() * (maximum)) + minimum;

while (running) {
    guess = window.prompt(`Enter a number between ${minimum} and ${maximum}`);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("Please enter a valid number.");
    } else if (guess > maximum || guess < minimum) {
        window.alert("Invalid guess. Enter a number within the range.");
    } else {
        attempts++;
        if (guess < answer) {
            window.alert("Too low.");
        } else if (guess > answer) {
            window.alert("Too high.");
        } else {
            window.alert(`Correct! The answer was ${answer}. It took you ${attempts} trys.`);
            running = false;
        }
    }
}
