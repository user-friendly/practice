
import { stdin } from "node:process"
import { default as rl } from  "node:readline"
import { EOL } from "node:os"

if (!stdin.isPaused()) {
	stdin.pause()
}

if (stdin.readableEncoding !== 'utf8') {
	// Explicitly setting an encoding will make the chunks of data
	// passed to the 'data' event to be strings, as opposed to a
	// Buffer object.
	stdin.setEncoding('utf8')
} 

let buffer = ''
let callbacks = []

function flushBuffer() {
	callbacks.forEach((cb) => cb(buffer))
	buffer = ''
}

stdin.on('data', (chunk) => {
	for (const c of chunk) {
		if (c === "\n") {
			flushBuffer()
		} else if (c !== "\r") {
			buffer += c
		}
	}
})

stdin.on('end', () => {
	flushBuffer()
})

/*stdin.on('close', () => {
	// File could be closed prematurely, before all data is consumed.
	// Can this be used as means to signal for errors?
});*/

function inputReader(callback) {
	if (typeof(callback) !== 'function') {
		throw "Callback is not a function."
	}

	callbacks.push(callback)

	if (stdin.isPaused()) {
		stdin.resume()
	}
}
function inputReaderHelper(callback) {
	inputReader((line) => {
		let output = callback(JSON.parse(line))
		output = JSON.stringify(output)
		println(output)
	})
}

export { inputReader, inputReaderHelper }
