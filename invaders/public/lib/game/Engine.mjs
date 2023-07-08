'use strict'

import Logger from './Logger.mjs'
import InputKeyboard from './System/InputKeyboard.mjs'
import Render from './System/Render.mjs'

let engine = null

class Engine extends Logger {
	frameStart = 0
	frameElapsed = 0
	frameLastTimeStamp = 0
	
	// Entity Systems
	keyboard = null
	render = null
	
	constructor() {
		super()
	}
	
	init() {
		this.keyboard = new InputKeyboard()
		this.render = new Render()
		
		this.logDebug('Engine initialized')
	}
	
	start() {
		window.requestAnimationFrame((timeStamp) => {
			this.frameLastTimeStamp = timeStamp
			window.requestAnimationFrame((timeStamp) => this.onFrame(timeStamp))
			this.logDebug('Frame time trackig established.')
		})
		
		this.logDebug('Engine started')
	}
	
	stop() {
		window.cancelAnimationFrame()
	}
	
	onFrame(timeStamp) {
		// Calculate FPS related timings.
		this.frameElapsed = timeStamp - this.frameLastTimeStamp
		this.frameLastTimeStamp = timeStamp
		
		// console.log(`elapsed time ${this.frameElapsed}`)
		
		// TODO Should onFrame() and onTick() be the same thing?
		//		Perhaps yes, since the physics system can have different ticks.
		//		However, this is JS ran in a browser...
		
		// Execute ticks for entity systems.
		this.keyboard.onTick(timeStamp, this.frameElapsed)
		this.render.onTick(timeStamp, this.frameElapsed)
		
		// Request next frame.
		window.requestAnimationFrame((timeStamp) => this.onFrame(timeStamp))
	}
}

engine = new Engine()

export default engine
