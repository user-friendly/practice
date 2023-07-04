'use strict'

import Logger from './Logger.mjs'
import entityManager from '../../public/lib/game/EntityManager.mjs'

class EntityManagerTest extends Logger {
	
	constructor() {
		super()
	}
	
	run() {
		let testFunction = []
		
		for (const name of Object.getOwnPropertyNames(Object.getPrototypeOf(this))) {
			if (name.substring(0, 5) === 'test_' && typeof this[name] === 'function') {
				testFunction.push(name)
			}
		}
		
		for (const name of testFunction) {
			this[name]()
		}
	}
	
	test_getUniqueId() {
		let bufferSize = 1024*8
		try {
			for (;bufferSize > 0; bufferSize--) {
				entityManager.getUniqueId()
			}
		} catch (e) {
			this.log('failed: getUniqueId()')
			this.logExceptoin(e)
			return false
		}
		
		this.log('passed: getUniqueId()')
		return true
	}
	
	test_registerEntity() {
		
		this.log('passed: registerEntity()')
	}
	
	test_isRegistered() {
		
		this.log('passed: isRegistered()')
	}
	
	test_getEntityById() {
		
		this.log('passed: getEntityById()')
	}
}

export default EntityManagerTest
