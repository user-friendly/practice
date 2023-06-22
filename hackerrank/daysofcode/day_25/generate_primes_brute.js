function isPrime_brute(num) {
	let i = 2;
	for (; i <= Math.floor(num/2); i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

let n = parseInt(process.argv[2]);

for (let i = 2; n > 0; i++) {
	if (isPrime_brute(i)) {
		n--;
		process.stdout.write(i + '\n');
	}
}
