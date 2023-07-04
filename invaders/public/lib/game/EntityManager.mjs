'use strict'

import Logger from './Logger.mjs'
import crypto from './Crypto.mjs'

let entityManager = null

class EntityManager extends Logger {
	// Entity map.
	// FIXME Use the actual Map class.
	entity = {}
	
	// Number of random ids generated.
	#idBufferSize = 1024
	#ids = []
	
	constructor() {
		super()
		this.getUniqueId()
	}
	
	isRegistered(entity) {
		if (this.entity[entity.id] !== undefined) {
			return true
		}
		return false
	}
	
	registerEntity(entity) {
		if (this.entity[entity.id] !== undefined) {
			throw `Entity ${entity.name}@${entity.id} already registered`
		}
		this.logDebug(`Registering entity ${entity.name}@${entity.id}`)
		return this.entity[entity.id] = entity
	}
	
	getEntityById(id) {
		return this.entity[entity.id] 
	}
	
	getUniqueId() {
		if (!this.#ids.length) {
			this.#ids = new Array(...crypto.getRandomValues(new Uint32Array(this.#idBufferSize)))
		}
		let id = this.#ids.pop()
		if (this.entity[id] === undefined) {
			return id
		}
		// FIXME Needs a loop in case of duplicates. Keep creating new ids until a unique one is generated/found.
		throw "Id already in use. This should not happen!"
	}
}

entityManager = new EntityManager()

export default entityManager
