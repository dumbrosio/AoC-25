const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "input.txt");
const input = fs.readFileSync(filePath, "utf8");
const lines = input.split("\n");

let zerosCount = 0;
let prevPosition = 50;

for (let i = 0; i < lines.length; i++) {
	const currentClicks = Number(lines[i].slice(1));

	if (lines[i].startsWith("R")) {
		const nextPosition = prevPosition + currentClicks;

		zerosCount += Math.floor(nextPosition / 100) - Math.floor(prevPosition / 100);
		prevPosition = nextPosition;
	}
	if (lines[i].startsWith("L")) {
		const nextPosition = prevPosition - currentClicks;

		zerosCount += Math.floor((prevPosition - 1) / 100) - Math.floor((nextPosition - 1) / 100);
		prevPosition = nextPosition;
	}
}

console.log(zerosCount);
