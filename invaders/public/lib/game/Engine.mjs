'use strict'

import Logger from './Logger.mjs'
import { inputKeyboard } from './Input.mjs'
// import assetManager from './AssetManager.mjs'
import Player from './Player.mjs'
import entityManager from './EntityManager.mjs'

let engine = null

class Engine extends Logger {
	player = null
	
	renderSurface = null
	ctx = null
	
	width = 0
	height = 0
	centerX = 0
	centerY = 0
	
	frameStart = null
	frameElapsed = null
	frameLastTimeStamp = null
	
	constructor() {
		super()
	}
	
	init() {
		this.renderSurface = document.getElementById('render-surface')
		if (!this.renderSurface) {
			throw "Failed to get render surface by id: render-surface"
		}
		
		this.ctx = this.renderSurface.getContext('2d')
		if (!this.ctx) {
			throw "Failed to get render surface's 2d context"
		}
		
		// Set 2d ctx's font to match the page.
		this.ctx.font = window.getComputedStyle(document.body).font
		this.logDebug(`2d context font: ${this.ctx.font}`)
		
		// The default should be good.
		// this.ctx.globalCompositeOperation = "destination-over";
		
		this.updateSurfaceDimensions()
		
		this.player = Player.getPlayer()
		this.player.username = 'player01'
		
		this.logDebug('Engine initialized')
	}
	
	start() {
		window.requestAnimationFrame((timeStamp) => this.onLoad(timeStamp))
		
		this.logDebug('Engine started')
	}
	
	stop() {
		window.cancelAnimationFrame()
	}
	
	onLoad(timeStamp) {
		if (this.frameLastTimeStamp === null) {
			this.frameElapsed = 0
			this.frameLastTimeStamp = timeStamp
		}
		else {
			this.frameElapsed = timeStamp - this.frameLastTimeStamp
		}
		
		this.clear()
		this.drawBorder()
		this.drawCenter()
		
		if (true/*this.playerImageShip.complete*/) {
			this.logDebug('Loading complete.')

			this.requestNextFrame()
		} else {
			this.drawLoadingText()
			window.requestAnimationFrame((timeStamp) => this.onLoad(timeStamp))
		}
	}
	
	onFrame(timeStamp) {
		this.frameElapsed = timeStamp - this.frameLastTimeStamp
		this.frameLastTimeStamp = timeStamp
		
		// console.log(`elapsed time ${this.frameElapsed}`)
		
		this.clear()
		this.drawBorder()
		this.drawCenter()
		
		this.handleInput()
		
		this.handleGraphics()
		
		this.requestNextFrame()
	}
	requestNextFrame() {
		window.requestAnimationFrame((timeStamp) => this.onFrame(timeStamp))
	}
	
	/**
	 * Handles keyboard, mouse and UI inputs.
	 */
	handleInput() {
		if (inputKeyboard.isInputReceived()) {
			this.player.onInput(inputKeyboard)
			
			/*// Notify all actors of the frame being processed.
			for (let i = 0; i < this.#actors.length; i++) {
				this.#actors[i].onInput(inputKeyboard);
			}*/
			
			inputKeyboard.resetInputReceived()
		}
	}
	
	/**
	 * Handles physics, i.e. ship & projectile movement, collisions, etc.
	 */
	handlePhysics() {
		// TBD
	}
	
	/**
	 * Handles displaying the results of the previous handlers.
	 */
	handleGraphics() {
		// TBD
	}
	
	clear() {
		// this.ctx.clearRect(2, 2, this.width-4, this.height-4)
		this.ctx.clearRect(0, 0, this.width, this.height)
	}
	
	drawLoadingText() {
		this.ctx.fillStyle = '#ffffff'
		this.ctx.textAlign = 'center'
		this.ctx.fillText("Loading...", this.centerX, this.centerY)
	}
	
	drawBorder() {
		this.ctx.lineWidth = 4
		this.ctx.strokeStyle = '#ff0000'
		this.ctx.beginPath()
		this.ctx.moveTo(0, 0)
		this.ctx.lineTo(this.width, 0)
		this.ctx.lineTo(this.width, this.height)
		this.ctx.lineTo(0, this.height)
		this.ctx.lineTo(0, 0)
		this.ctx.stroke()
	}
	
	drawCenter() {
		this.ctx.lineWidth = 1
		this.ctx.strokeStyle = '#ffffff'
		this.ctx.beginPath()
		this.ctx.moveTo(0, this.centerY)
		this.ctx.lineTo(this.width, this.centerY)
		this.ctx.stroke()
		this.ctx.moveTo(this.centerX, 0)
		this.ctx.lineTo(this.centerX, this.height)
		this.ctx.stroke()
	}
	
	updateSurfaceDimensions() {
		this.width = this.renderSurface.width
		this.height = this.renderSurface.height
		
		this.centerX = this.width/2
		this.centerY = this.height/2
		
		this.logDebug(`new surface dimensions are: ${this.width}x${this.height}`)
	}
}

engine = new Engine()

export default engine
