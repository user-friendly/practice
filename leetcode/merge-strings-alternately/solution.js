import { inputReader } from '../input-reader.js';
inputReader(processData, true);

function processData(data) {
	data.forEach((line) => {
		solution(line.split(','));
	});
}

function solution(words) {
	
}
