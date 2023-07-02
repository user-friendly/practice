'use strict'

import Logger from './Logger.mjs'

let entityManager = null

class EntityManager extends Logger {
	#map = {}
	
	// Number of random ids generated.
	#idBufferSize = 1024
	#ids = []
	
	constructor() {
		super()
		this.getUniqueId()
	}
	
	isRegistered(entity) {
		if (this.#map[entity.id] !== undefined) {
			return true
		}
		return false
	}
	
	registerEntity(entity) {
		if (this.#map[entity.id] !== undefined) {
			throw `Entity ${entity.name}@${entity.id} already registered`
		}
		this.logDebug(`Registering entity ${entity.name}@${entity.id}`)
		return this.#map[entity.id] = entity
	}
	
	getEntityById(id) {
		return this.#map[entity.id] 
	}
	
	getUniqueId() {
		if (!this.#ids.length) {
			this.#ids = new Array(...crypto.getRandomValues(new Uint32Array(this.#idBufferSize)))
		}
		let id = this.#ids.pop()
		if (this.#map[id] === undefined) {
			return id
		}
		throw "Id already in use. This should not happen!"
	}
}

class Entity extends Logger {
	#name = 'undefined'
	#label = 'undefined'
	#id = null
	#uuid = 'TBD'
	
	constructor(name, label) {
		super()
		
		this.#name = name
		this.#label = label !== undefined ? name : label 
		
		this.#id = entityManager.getUniqueId()
		entityManager.registerEntity(this)
	}
	
	get name() {
		return this.#name
	}
	
	get label() {
		return this.#label
	}
	
	get id() {
		return this.#id
	}
	
	get uuid() {
		return this.#id
	}
	
	onFrame(elapsedTime) {}
	onInput(keyboard, mouse) {}
}

entityManager = new EntityManager()

export default Entity
export { entityManager }
