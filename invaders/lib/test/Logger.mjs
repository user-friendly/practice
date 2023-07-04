'use strict'

class Logger {
	log(message) {
		console.log(this.constructor.name + ': ' + message)
	}
	logExceptoin(ex) {
		console.log(ex)
	}
}

export default Logger
