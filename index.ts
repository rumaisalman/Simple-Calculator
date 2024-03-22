#!/usr/bin/node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10)

const answers = await inquirer.prompt([
	{
		message: "Guess the number between 1-10!",
		type: "number",
		name: "guessedNumber"
	},])

console.log(answers)

if (answers.guessedNumber < randomNumber) {
	console.log("Oops, You number is too small. Try again.")
} else if (answers.guessedNumber > randomNumber) {
	console.log("Oops,Your number is too big.Try again.")
} else if (answers.guessedNumbers == randomNumber) {
	console.log("Yay! You have guessed the correct number!")
} else {
	console.log("Please enter a valid number.")
}

