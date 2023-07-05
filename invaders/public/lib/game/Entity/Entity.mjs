'use strict'

// import Logger from '../Logger.mjs'
import entityManager from './EntityManager.mjs'
import Component from '../Component/Component.mjs'

class Entity {
	#id		= -1
	#name	= 'undefined'
	
	// FIXME This is not the way to go! Component lists should not be in
	//		 entities!!!
	
	#components = {}
	
	static create(components = [], name = 'entity') {
		let actor = new Entity()
		
		actor.#id = entityManager.getUniqueId()
		actor.name = name
		
		for (const c of components) {
			if (c instanceof Component) {
				if (actor.#components[c.type()] !== undefined) {
					// TODO Figure out if we should report this or fail silently?
					continue
				}
				actor.#components[c.type()] = c
			}
		}
		
		entityManager.registerEntity(actor)
		return actor
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
