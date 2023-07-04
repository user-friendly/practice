'use strict'

import Component from "./Component.mjs"

class HitPoint extends Component {
	hitpoints = 0
	
	constructor(hp = 0) {
		this.hitpoints = hp
	}
}

export default HitPoint
