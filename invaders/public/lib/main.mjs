'use strict'

import GameEngine from './game/Engine.mjs'

window.addEventListener('load', () => {
	window.gameEngine = new GameEngine()
})
