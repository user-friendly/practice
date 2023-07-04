'use strict'

import Entity from './Entity.mjs'
import entityManager from './EntityManager.mjs'

class Actor extends Entity {
	#components = {}
	
	constructor(name, label, location) {
		super(name, label)
		
		if (location) {
			this.location = location
		}
	}
	
	/**
	 * Creates a generic actor.
	 */
	static createActor(name, label) {
		let actor = new Actor(entityManager.getUniqueId(), name, label)
		entityManager.registerEntity(actor)
		return actor
	}
	
	onFrame(elapsedTime) {}
	onInput(keyboard, mouse) {}
}

export default Actor;
