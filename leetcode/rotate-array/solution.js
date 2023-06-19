import { inputReader } from '../input-reader.js';
inputReader(proccessData, true);

function proccessData(data) {
	for (let i = 0; i < data.length; i += 2) {
		let nums = data[i].split(',');
		let k = parseInt(data[i+1], 10);
		nums = solution(nums, k);
		console.log(k + ': ' + nums.join(','));
	}
}

function solution(nums, k) {
	k = k % nums.length;
	if (nums.length < 1 || k < 1) {
		return nums;
	}
	let offset = nums.length - k;
	let left = nums.slice(offset);
	let right = nums.slice(0, offset);
	return left.concat(right);
}
