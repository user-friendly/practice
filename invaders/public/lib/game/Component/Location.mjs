'use strict'

import Component from './Component.mjs'
import Vector3d from '../Vector3d.mjs'

// NOTE Seems like a useless component, for the time being.

/**
 * Component has location in the game world.
 */
class Location extends Component {
	#v3 = new Vector3d()
	
	constructor(x = 0, y = 0, z = 0) {
		this.v3.x = x
		this.v3.y = y
		this.v3.z = z
	}
	
	get x () { return this.#v3.x }
	set x (value) { this.#v3.x = value; return this }
	
	get y () { return this.#v3.y }
	set y (value) { this.#v3.y = value; return this }
	
	get z () { return this.#v3.z }
	set z (value) { this.#v3.z = value; return this }
}

export default Location
