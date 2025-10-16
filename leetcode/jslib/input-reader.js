
import { stdin } from "node:process"
import { print, println } from "#lib/output-writer"

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
	buffer = buffer.trim()
	if (buffer.length > 0) {
		callbacks.forEach((cb) => cb(buffer))
		buffer = ''
	}
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
		output = typeof output !== "string" ? JSON.stringify(output) : output
		println(output)
	})
}

export { inputReader, inputReaderHelper }
