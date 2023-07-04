'use strict'

class Component {
	get type() {
		return this.constructor.name
	}
}

export default Component
