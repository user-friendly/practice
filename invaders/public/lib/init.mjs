'use strict'

import engine from './game/Engine.mjs'

window.addEventListener('load', () => {
	engine.init()
	engine.start()
})
