const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "input.txt");
const input = fs.readFileSync(filePath, "UTF-8").trim();
const banks = input.split("\n").map((line) => line.split("").map(Number));
const joltages = [];

for (let i = 0; i < banks.length; i++) {
	const bank = banks[i];
	const firstDigit = Math.max(...bank.slice(0, -1));
	let secondDigit;

	if (bank.indexOf(firstDigit) === bank.length - 2) {
		secondDigit = bank[bank.length - 1];
	} else {
		secondDigit = Math.max(...bank.slice(bank.indexOf(firstDigit) + 1));
	}
	joltages.push(Number(String(firstDigit) + String(secondDigit)));
}

console.log(joltages.reduce((a, b) => a + b, 0));
