'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function parseTheInput(S) {
	let n = parseInt(S, 10);
	if (isNaN(n)) {
		throw "Bad String";
	}
	return n;
}

function main() {
    const S = readLine();
    
    try {
		console.log(parseTheInput(S));
	} catch (e) {
		console.log(e);
		process.stderr.write(e);
	}
}
