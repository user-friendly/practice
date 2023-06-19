
const stdin = process.stdin;

if (stdin.isPaused()) {
	// console.log('Stdin, is paused.');
	// console.log('Stdin, will be unpaused.');
	
	stdin.resume();
}

if (stdin.readableEncoding !== 'utf8') {
	// console.log('Stdin, encoding is ' + stdin.readableEncoding);
	// console.log('Stdin, set encoding to utf8');
	
	// Explicitly setting an encoding will make the chunks of data
	// passed to the 'data' event to be strings, as opposed to a
	// Buffer object.
	stdin.setEncoding('utf8');
} 

let data = '';
let callbacks = [];

stdin.on('data', (chunk) => {
	data += chunk;
});

stdin.on('end', () => {
	callbacks.forEach((cb) => cb());
});

/*stdin.on('close', () => {
	// File could be closed prematurely, before all data is consumed.
	// Can this be used as means to signal for errors?
});*/

function inputReader(callback, linesArray = false) {
	if (typeof(callback) !== 'function') {
		throw "Callback is not a function.";
	}
	
	if (linesArray) {
		callbacks.push(() => callback(data.split('\n')));
	}
	else {
		callbacks.push(() => callback(data));
	}
};

export { inputReader };
