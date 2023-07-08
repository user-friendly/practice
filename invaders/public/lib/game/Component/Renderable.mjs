'use strict'

import Component from "./Component.mjs";

class Renderable extends Component {
	// TODO Is this a direct reference to an asset object or a locaiton or an id?
	//		Probably a reference is better.
	asset = null
	
	constructor(asset) {
		super()
		
		this.asset = asset
	}
}

export default Renderable
