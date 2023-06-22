'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('[ \n]+'));
    main();    
});
function read() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
	grade = 'T';
	
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    constructor(fistName, lastName, id, scores) {
		super(fistName, lastName, id, scores);
		
		if (scores.length > 0) {
			let score = scores.reduce((sum, v) => sum + v, 0);
			score = score / scores.length;
			
			if (score >= 90) {
				this.grade = 'O';
			}
			else if (score >= 80) {
				this.grade = 'E'
			}
			else if (score >= 70) {
				this.grade = 'A'
			}
			else if (score >= 55) {
				this.grade = 'P'
			}
			else if (score >= 40) {
				this.grade = 'D'
			}
		}
	}

    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    calculate() {
		return this.grade;
	}
}

function main() {
    let firstName = read()
    let lastName = read()
    let id = +read()
    let numScores = +read()
    let testScores = new Array(numScores)
    
    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read()  
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}
