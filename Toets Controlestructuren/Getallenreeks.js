const prompt = require("prompt-sync")();

let counter = 0;
let sum = 0
let number;
let max, min, avg;


number = Number(prompt("Enter a positive number (negative to abort): "));
while (isNaN(number)) {
    number = Number(prompt("That was not a number. Try again: "));
}

max = number;
min = number;

while (number >= 0){
    sum += number;
    counter++;

    if (number > max) {
        max = number;
    }

    if (number < min) {
        min = number;
    }

    number = Number(prompt("Enter a positive number (negative to abort): "));
    while (isNaN(number)) {
        number = Number(prompt("That was not a number. Try again: "));
    }
} 

if (counter != 0) {
    avg = sum / counter;

    console.log();
    console.log("Sum: " + sum);
    console.log("Average: " + avg);
    console.log("Min: " + min);
    console.log("Max: " + max);
} else {
    console.log("Je hebt geen geldige getallen ingegeven.");
}