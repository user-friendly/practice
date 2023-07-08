'use strict'

import Logger from "./Logger.mjs"

import entityManager from "./Entity/EntityManager.mjs"
import Entity from "./Entity/Entity.mjs"

import componentManager from "./Component/ComponentManager.mjs"
import Transform from "./Component/Transform.mjs"
import Camera from "./Component/Camera.mjs"

let actorFactory = null

class ActorFactory extends Logger {
	constructor() {
		super()
	}
	
	createCamera() {
		let s = Object.getOwnPropertyNames(componentManager.query([Camera, Transform])).length
		
		let e = Entity.create('camera' + s)
		
		componentManager.add(e, new Camera())
		componentManager.add(e, new Transform())
		
		return e
	}
}

actorFactory = new ActorFactory()

export default actorFactory
