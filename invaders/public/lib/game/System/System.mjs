'use strict'

import Logger from "../Logger.mjs"

class System extends Logger {
	constructor() {
		super()
	}
	
	onTick(timeStamp, timeElapsed) {
		throw 'Implement onTick() method.'
	}
}

export default System
