'use strict'

import Component from './Component.mjs'
import Vector3d from '../Vector3d.mjs'


class Transform extends Component {
	position = new Vector3d(0, 0, 0)
	scale	 = new Vector3d(1, 1, 1)
	rotate	 = new Vector3d(0, 0, 0)
}

export default Transform
