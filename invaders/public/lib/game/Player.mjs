'use strict'

import Actor from './Actor.mjs'

class Player extends Actor {
	HP_FULL		= 100
	HP_HIGH		= 75
	HP_MEDIUM	= 50
	HP_LOW		= 25
	
	shipBases	= {}
	
	assetMap = {
		SHIP_BASE_VARIANT_01: '/media/voidship/Main Ship/Main Ship - Bases/PNGs/Main Ship - Base - Full health.png',
		SHIP_BASE_VARIANT_02: '/media/voidship/Main Ship/Main Ship - Bases/PNGs/Main Ship - Base - Slight damage.png',
		SHIP_BASE_VARIANT_03: '/media/voidship/Main Ship/Main Ship - Bases/PNGs/Main Ship - Base - Damaged.png',
		SHIP_BASE_VARIANT_04: '/media/voidship/Main Ship/Main Ship - Bases/PNGs/Main Ship - Base - Very damaged.png',
	}
	
	constructor(name = 'player01', label = 'Player', location) {
		super(name, label, location)
		
		this.shipBases[this.HP_FULL] 	= this.assetMap.SHIP_BASE_VARIANT_01
		this.shipBases[this.HP_HIGH] 	= this.assetMap.SHIP_BASE_VARIANT_02
		this.shipBases[this.HP_MEDIUM] 	= this.assetMap.SHIP_BASE_VARIANT_03
		this.shipBases[this.HP_LOW] 	= this.assetMap.SHIP_BASE_VARIANT_04
		
		this.hitPoints = 100
	}
	
	onInput(keyboard, mouse) {
		const slow = 2.5
		const fast = 5
		
		if (keyboard.isDown('KeyW') || keyboard.isDownKeyUp()) {
			if (!(keyboard.isDown('ShiftLeft') || keyboard.isDown('ShiftRight'))) {
				this.location.y -= fast
			}
			else {
				this.location.y -= slow
			}
		}
		
		if (keyboard.isDown('KeyS') || keyboard.isDownKeyDown()) {
			if (!(keyboard.isDown('ShiftLeft') || keyboard.isDown('ShiftRight'))) {
				this.location.y += fast
			}
			else {
				this.location.y += slow
			}
		}
		
		if (keyboard.isDown('KeyA') || keyboard.isDownKeyLeft()) {
			if (!(keyboard.isDown('ShiftLeft') || keyboard.isDown('ShiftRight'))) {
				this.location.x -= fast
			}
			else {
				this.location.x -= slow
			}
		}
		
		if (keyboard.isDown('KeyD') || keyboard.isDownKeyRight()) {
			if (!(keyboard.isDown('ShiftLeft') || keyboard.isDown('ShiftRight'))) {
				this.location.x += fast
			}
			else {
				this.location.x += slow
			}
		}
	}
}

export default Player
