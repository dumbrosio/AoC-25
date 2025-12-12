const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "input.txt");
const input = fs.readFileSync(filePath, "utf-8").trim();
const ranges = input.split(",");
const invalidIds = [];

for (let i = 0; i < ranges.length; i++) {
	const range = ranges[i];
	const [start, end] = range.split("-").map(Number);

	for (let j = start; j <= end; j++) {
		if (j.toString().length % 2 === 0) {
			if (
				j.toString().substring(0, j.toString().length / 2) ===
				j.toString().substring(j.toString().length / 2)
			) {
				invalidIds.push(j);
			}
		}
	}
}

console.log(invalidIds.reduce((acc, curr) => acc + curr, 0));
