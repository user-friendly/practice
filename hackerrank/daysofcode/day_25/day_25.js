// Find primes.

function isPrime_brute(num) {
	if (num === 1) {
        console.log('Not prime');
        return;
    }
    if (num === 2) {
        console.log('Prime');
        return;
    }
    if (num === 3) {
		console.log('Prime');
	}
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log('Not prime')
            return;
        }
    }
    console.log('Prime');
}

function isPrime_sqrt(num) {
	if (num === 1) {
        console.log('Not prime');
        return;
    }
    if (num === 2) {
        console.log('Prime');
        return;
    }
    if (num === 3) {
		console.log('Prime');
	}
    for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            console.log('Not prime')
            return;
        }
    }
    console.log('Prime');
}

function processData(input) {
    let nums = input.split('\n').map((v) => parseInt(v, 10));
    let n = nums.shift();
    
    nums.forEach(isPrime_brute);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
