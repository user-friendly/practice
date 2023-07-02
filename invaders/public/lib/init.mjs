'use strict'

import gameEngine from './game/Engine.mjs'

window.addEventListener('load', () => {
	gameEngine.init()
	gameEngine.start()
})
