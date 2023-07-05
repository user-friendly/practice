'use strict'

import System from './System.mjs'

class InputKeyboard extends System {
	debugMode = false
	
	keyDown = {}
	
	// Key codes to prevent the default behaviour of.
	preventDefault = {
		'ArrowUp': true,
		'ArrowDown': true,
		'ArrowLeft': true,
		'ArrowRight': true,
		'Space': true,
		'Enter': true,
		'Space': true,
	}
	
	#inputReceived = false
	
	constructor() {
		super()
		window.addEventListener('keydown', (event) => {
			this.#inputReceived = true
			this.onKeyDown(event)
		})
		window.addEventListener('keyup', (event) => {
			this.#inputReceived = true
			this.onKeyUp(event)
		})
		window.addEventListener('blur', (event) => {
			this.#inputReceived = true
			this.onWindowBlur(event)
		})
	}
	
	onTick(timeStamp, timeElapsed) {
		// TODO Process entities that have the input(keyboard?) component.
	}
	
	isInputReceived() {
		return this.#inputReceived
	}
	
	resetInputReceived() {
		this.#inputReceived = false
	}
	
	isDownKeyUp() {
		return this.isDown('ArrowUp')
	}
	
	isDownKeyDown() {
		return this.isDown('ArrowDown')
	}
	
	isDownKeyLeft() {
		return this.isDown('ArrowLeft')
	}
	
	isDownKeyRight() {
		return this.isDown('ArrowRight')
	}
	
	isDown(key) {
		if (this.keyDown[key] === undefined) {
			this.keyDown[key] = false
		}
		return this.keyDown[key]
	}
	
	onKeyUp(event) {
		this.keyDown[event.code] = false
		
		if (this.preventDefault[event.code] !== undefined) {
			event.preventDefault()
		}
		
		this.logDebug(`keyup: ${event.key} (code: ${event.code})`)
	}
	
	onKeyDown(event) {
		this.keyDown[event.code] = event
		
		if (this.preventDefault[event.code] !== undefined) {
			event.preventDefault()
		}
		
		this.logDebug(`keydown: ${event.key} (code: ${event.code})`)
	}
	
	onWindowBlur(event) {
		this.keyDown = {}
		
		this.logDebug('Window lost focus - clear map')
	}
}

export default InputKeyboard
