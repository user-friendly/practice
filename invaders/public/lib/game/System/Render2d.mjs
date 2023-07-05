'use strict'

import System from './System.mjs'

class Render2d extends System {
	renderSurface = null
	ctx = null
	
	width = 0
	height = 0
	centerX = 0
	centerY = 0
	
	constructor() {
		super()
		
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
	}
	
	onTick(timeStamp, timeElapsed) {
		this.clear()
		this.drawBorder()
		this.drawCenter()
		
		// TODO Render entities with the render component.
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

export default Render2d
