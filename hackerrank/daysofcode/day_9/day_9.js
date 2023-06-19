'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

/*
 * Complete the 'factorial' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function factorial(n) {
    if (n <= 1) {
		return 1;
	}
	return n * factorial(n - 1);
}

function readLine() {
    return inputString[currentLine++];
}

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

	const n = parseInt(readLine().trim(), 10);

	const result = factorial(n);

    console.log(result);
});


