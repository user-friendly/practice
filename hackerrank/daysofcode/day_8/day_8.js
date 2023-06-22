"use strict";

// Useage of Map/Dictionary data structure.

let _input = "";

let _notfound = "Not found";
let _phonebook = {}; 

function processData(input) {
    let lines = input.split("\n");
    let n = parseInt(lines[0]);
    
    let entry;
    let i = 1;
   	for (; i < n+1; i++) {
		entry = lines[i].split(' ');
		_phonebook[entry[0]] = entry[1];
	}
	for (; i < lines.length; i++) {
		if (undefined != _phonebook[lines[i]]) {
			console.log(lines[i] + '=' + _phonebook[lines[i]]);
		}
		else {
			console.log(_notfound);
		}
	}
}

process.stdin.resume();
process.stdin.setEncoding("ascii");

process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
