'use strict'

class Component {
	get type() {
		return this.constructor.name
	}
	
	static get type() {
		return this.name
	}
}

export default Component
