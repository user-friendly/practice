'use strict'

class Logger {
	debugMode = true
	
	constructor() {
		if (this.debugMode) {
			this.logDebug('Debug enabled')
		}
	}
	
	logDebug(message) {
		if (!this.debugMode) {
			return
		}
		console.log(this.constructor.name + ': ' + message)
	}
}

export default Logger
