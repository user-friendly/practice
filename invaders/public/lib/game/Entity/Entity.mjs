'use strict'

// import Logger from '../Logger.mjs'
import entityManager from './EntityManager.mjs'
import Component from '../Component/Component.mjs'

class Entity {
	#id		= -1
	#name	= 'undefined'
	
	// I want the id to be protected...
	static create(name = 'entity') {
		let e = new Entity()
		e.#id = entityManager.getUniqueId()
		e.#name = name
		entityManager.registerEntity(e)
		return e
	}
	
	get id () {
		return this.#id
	}
	
	get name () {
		return this.#name
	}
	
	set name (value) {
		this.#name = `${value}@${this.#id}`
		return this
	}
}

export default Entity
