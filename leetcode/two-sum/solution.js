import { inputReader } from '../input-reader.js';
inputReader(processData, true);

function processData(data) {
	data.forEach((line) => {
		let target = parseInt(line.split(':')[0], 10);
		let nums = line.split(':')[1].split(',');
		nums.forEach((v, i) => nums[i] = parseInt(v, 10));
		solution(nums, target);
	});
}

// O(n^2), worst implementation.
function solution(nums, target) {
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i+1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				console.log(`[${i},${j}]`);
				return i + j;
			}
		}
	}
}

function solution_hash_map(nums, target) {
	// There's an O(n) solution with a hash map.
}
