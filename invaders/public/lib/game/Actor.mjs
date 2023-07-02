'use strict'

import Entity from './Entity.mjs'
import Vector3d from './Vector3d.mjs'

class Actor extends Entity {
	hitPoints	= 0
	
	// Physical world location of actor.
	location	= new Vector3d(0, 0, 0)
	
	constructor(name, label, location) {
		super(name, label)
		
		if (location) {
			this.location = location
		}
	}
}

export default Actor;
