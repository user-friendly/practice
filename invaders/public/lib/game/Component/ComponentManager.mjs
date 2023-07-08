'use strict'

import Logger from "../Logger.mjs"

let componentManager = null

class ComponentManager extends Logger {
	/**
	 * The component store.
	 * 
	 * Each key will be a component type (Component.type).
	 * The value will be another map, key being the entity id (Entity.id).
	 */
	#component = {}
	
	constructor() {
		super()
	}
	
	add(entity, component) {
		// TODO Is a silent fail a good idea?
		if (this.#component[component.type][entity.id] === undefined) {
			this.#component[component.type][entity.id] = component
		}
		return this
	}
	
	remove(entity, component) {
		if (this.#component[component.type][entity.id] !== undefined) {
			delete this.#component[component.type][entity.id]
		}
		return this
	}
	
	removeAll(entity) {
		for (const c in this.#component) {
			if (this.#component[c][entity.id] !== undefined) {
				delete this.#component[c][entity.id]
			}
		}
		return this
	}
	
	queryAll(entity) {
		let q = {
			'entity': 	 entity
		}
		for (const c in this.#component) {
			if (this.#component[c][entity.id] !== undefined) {
				q[c] = this.#component[c][entity.id]
			}
		}
		return q
	}
}

componentManager = new ComponentManager()

export default componentManager
