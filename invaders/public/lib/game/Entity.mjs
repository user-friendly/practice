'use strict'

import Logger from './Logger.mjs'

class Entity extends Logger {
	#name = 'undefined'
	#label = 'undefined'
	#id = null
	// FIXME To be figured out.
	#uuid = 'N/A'
	
	constructor(id, name, label) {
		super()
		
		this.#id = id
		this.#name = name
		this.#label = label !== undefined ? name : label
	}
	
	get name () {
		return this.#name
	}
	
	get label () {
		return this.#label
	}
	
	set label (value) {
		this.#label = value
		return this
	}
	
	get id () {
		return this.#id
	}
	
	get uuid () {
		return this.#id
	}
}

export default Entity
