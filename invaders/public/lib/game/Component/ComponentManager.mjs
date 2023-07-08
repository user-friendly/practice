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
	
	// FIXME Write a UnitTest for this class!!!
	
	/**
	 * Add a component instance to an entity.
	 * 
	 * `entity` & `component` are object instances.
	 */
	add(entity, component) {
		// FIXME Is lazy init a good idea.
		if (this.#component[component.type] === undefined) {
			this.#component[component.type] = {}
		}
		
		// TODO Is a silent fail a good idea?
		if (this.#component[component.type][entity.id] === undefined) {
			this.#component[component.type][entity.id] = component
		}
		return this
	}
	
	/**
	 * Remove a component instance from an entity.
	 * 
	 * `entity` & `component` are object instances.
	 */
	remove(entity, component) {
		// FIXME Is lazy init a good idea.
		if (this.#component[component.type] === undefined) {
			this.#component[component.type] = {}
		}
		
		if (this.#component[component.type][entity.id] !== undefined) {
			delete this.#component[component.type][entity.id]
		}
		return this
	}
	
	/**
	 * Remove all components from an entity.
	 * 
	 * `entity` is an object instance.
	 */
	removeAll(entity) {
		for (const c in this.#component) {
			if (this.#component[c][entity.id] !== undefined) {
				delete this.#component[c][entity.id]
			}
		}
		return this
	}
	
	/**
	 * A list of component classes.
	 * 
	 * All query elements are in conjuctions, i.e. all must be present
	 * on the entity.
	 * 
	 * Example:
	 * 		query([Camera, Transform])
	 */
	query(componentList = []) {
		let entityMap = {}
		
		const qc = componentList.shift()
		// FIXME What if the component map does not exist yet???
		for (const id in this.#component[qc.type]) {
			entityMap[id] = id
		}
		
		for (const qc of componentList) {
			for (const id in this.#component[qc.type]) {
				if (entityMap[id] === undefined) {
					delete entityMap[id]
				}
			}
		}
		
		return entityMap
	}
	
	/**
	 * Get all components for an entity instance.
	 * 
	 * Returned object is a map, where keys are the Component.type
	 * and values the component instances.
	 */
	getComponents(entity) {
		let q = {}
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
