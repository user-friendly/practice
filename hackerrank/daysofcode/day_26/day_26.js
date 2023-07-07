function processData(input) {
    let lines = input.split('\n')
    
    let rdate = lines[0].split(' ').map((v) => parseInt(v, 10))
    let ddate = lines[1].split(' ').map((v) => parseInt(v, 10))
    
    let fine = 0
   	
   	if (rdate[2] > ddate[2]) {
		fine = 10000
    } else if (rdate[2] == ddate[2]) {
		if (rdate[1] > ddate[1]) {
			fine = rdate[1] - ddate[1]
			fine *= 500
		} else if (rdate[1] == ddate[1]) {
			if (rdate[0] > ddate[0]) {
				fine = rdate[0] - ddate[0]
				fine *= 15
			}
		}
	}
   	
    console.log(fine)
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
