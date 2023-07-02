'use strict'

class GameEngine {
	renderSurface = null
	ctx = null
	
	width = 0
	height = 0
	centerX = 0
	centerY = 0
	
	frameStart = null
	frameElapsed = null
	frameLastTimeStamp = null
	
	playerImageShip = new Image()
	playerShipX = 0
	playerShipY = 0
	
	constructor() {
		this.renderSurface = document.getElementById('render-surface')
		if (!this.renderSurface) {
			throw "Failed to get render surface by id: render-surface"
		}
		
		this.ctx = this.renderSurface.getContext('2d')
		if (!this.ctx) {
			throw "Failed to get render surface's 2d context"
		}
		
		this.updateSurfaceDimensions()
		
		// Set 2d ctx's font to match the page.
		this.ctx.font = window.getComputedStyle(document.body).font
		this.logDebug(`2d context font: ${this.ctx.font}`)
		
		// The default should be good.
		// this.ctx.globalCompositeOperation = "destination-over";
		
		// TODO Asset management here.
		this.playerImageShip.src = '/media/spaceship.png'
		this.playerImageShip.addEventListener('load', () => {
			this.playerShipX = this.centerX
			this.playerShipY = this.centerY
			
			this.logDebug(`Image "${this.playerImageShip.src} loaded`)
		})
		
		// Draw the border. Required only once since the clear
		// takes the border into account.
		this.drawBorder()
		
		this.logDebug('Engine initialized')
		
		window.requestAnimationFrame((timeStamp) => this.onLoad(timeStamp))
	}
	
	logDebug(message) {
		console.log(this.constructor.name + ': ' + message)
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
		this.drawCenter()
		
		if (this.playerImageShip.complete) {
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
		
		console.log(`elapsed time ${this.frameElapsed}`)
		
		this.clear()
		this.drawCenter()
		
		this.drawPlayerShip()
		
		// this.requestNextFrame()
	}
	
	requestNextFrame() {
		window.requestAnimationFrame((timeStamp) => this.onFrame(timeStamp))
	}
	
	clear() {
		this.ctx.clearRect(2, 2, this.width-4, this.height-4)
	}
	
	drawLoadingText() {
		this.ctx.fillStyle = '#ffffff'
		this.ctx.textAlign = 'center'
		this.ctx.fillText("Loading...", this.centerX, this.centerY)
	}
	
	drawBorder() {
		this.ctx.lineWidth = 4
		this.ctx.strokeStyle = '#ff0000'
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
		this.ctx.moveTo(0, this.centerY)
		this.ctx.lineTo(this.width, this.centerY)
		this.ctx.stroke()
		this.ctx.moveTo(this.centerX, 0)
		this.ctx.lineTo(this.centerX, this.height)
		this.ctx.stroke()
	}
	
	drawPlayerShip() {
		this.ctx.drawImage(
			this.playerImageShip,
			this.playerShipX-(this.playerImageShip.width/2),
			this.playerShipY-(this.playerImageShip.height/2)
		)
	}
	
	updateSurfaceDimensions() {
		this.width = this.renderSurface.width
		this.height = this.renderSurface.height
		
		this.centerX = this.width/2
		this.centerY = this.height/2
		
		this.logDebug(`new surface dimensions are: ${this.width}x${this.height}`)
	}
}

export default GameEngine
