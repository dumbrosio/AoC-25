const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "input.txt");
const input = fs.readFileSync(filePath, "utf8");
const lines = input.split("\n");

let zerosCount = 0;
let rotation = 50;

for (let i = 0; i < lines.length; i++) {
	if (lines[i].startsWith("R")) {
		rotation += Number(lines[i].slice(1));
		const tensAndUnits = rotation % 100;

		rotation = tensAndUnits;
		tensAndUnits === 0 ? zerosCount++ : zerosCount;
	}
	if (lines[i].startsWith("L")) {
		rotation -= Number(lines[i].slice(1));
		const tensAndUnits = rotation % 100;

		rotation = tensAndUnits;
		tensAndUnits === 0 ? zerosCount++ : zerosCount;
	}
}

console.log(zerosCount);
