const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "input.txt");
const input = fs.readFileSync(filePath, "utf-8").trim();
const ranges = input.split(",");
const invalidIds = [];
const isPrime = (num) => {
	for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
		if (num % i === 0) return false;
	}
	return num > 1;
};
const areAllDigitsSame = (num) => {
	const numStr = String(num);
	const firstDigit = numStr[0];

	return numStr.split("").every((digit) => digit === firstDigit);
};

for (let i = 0; i < ranges.length; i++) {
	const range = ranges[i];
	const [start, end] = range.split("-").map(Number);

	for (let j = start; j <= end; j++) {
		const str = j.toString();
		const len = str.length;

		if (len > 1 && areAllDigitsSame(j)) {
			invalidIds.push(j);
		} else if (!isPrime(len)) {
			for (let k = 2; k < len; k++) {
				if (len % k === 0) {
					const subLen = len / k;
					const substr = str.substring(0, subLen);

					if (substr.repeat(k) === str) {
						invalidIds.push(j);
						break;
					}
				}
			}
		}
	}
}

console.log(invalidIds.reduce((acc, curr) => acc + curr, 0));
