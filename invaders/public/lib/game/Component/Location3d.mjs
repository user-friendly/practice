'use strict'

import Component from './Component.mjs'

class Location3d extends Component {
	x = 0
	y = 0
	z = 0
	
	constructor(x = 0, y = 0, z = 0) {
		this.x = x
		this.y = y
		this.z = z
	}
}

export default Location3d
