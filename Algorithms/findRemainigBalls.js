"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
	inputString += inputStdin;
});

process.stdin.on("end", function () {
	inputString = inputString.split("\n");

	main();
});

function readLine() {
	return inputString[currentLine++];
}

function findRemainingBalls(direction, strength) {
	// Write your code here
	if (direction.length !== strength.length) {
		return -1;
	}
	for (let i = 0; i < direction.length; i++) {
		if (direction[i] > strength[i + 1]) {
			if (strength[i] > strength[i + 1]) {
				return i;
			} else {
				return i + 1;
			}
		}
	}
	return 1;
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const directionCount = parseInt(readLine().trim(), 10);

	let direction = [];

	for (let i = 0; i < directionCount; i++) {
		const directionItem = parseInt(readLine().trim(), 10);
		direction.push(directionItem);
	}

	const strengthCount = perseInt(readLine().trim(), 10);

	let strength = [];

	for (let i = 0; i < strengthCount; i++) {
		const strengthItem = parseInt(readLine().trim(), 10);
		strength.push(strengthItem);
	}
	const result = findRemainingBalls(direction, strength);

	ws.write(result.join("\n") + "\n");

	ws.end();
}
