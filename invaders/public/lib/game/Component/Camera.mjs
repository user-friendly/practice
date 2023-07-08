'use strict'

import Component from "./Component.mjs";
// import Vector3d from "../Vector3d.mjs";

class Camera extends Component {
	width = 0
	height = 0
	
	constructor(width, height) {
		this.width = width
		this.height = height
	}
	
}

export default Camera
