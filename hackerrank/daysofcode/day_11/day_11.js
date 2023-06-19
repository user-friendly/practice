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

function main() {
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    
    let max = -Infinity;
    let sum = 0;
   	// i is row, j is column
	for (let i = 1; i < 5; i++) {
		for (let j = 1; j < 5; j++) {
			sum = 
				arr[i-1][j-1] + arr[i-1][j] + arr[i-1][j+1] +
				arr[i][j] +
				arr[i+1][j-1] + arr[i+1][j] + arr[i+1][j+1]
			;
			if (sum > max) {
				max = sum;
			}
		}
	}
	
	console.log(max);
}
