'use strict'

import Entity from './Entity.mjs'

class Asset extends Entity {
	// The resource location on the web or disk.
	location = null
	// The resource object.
	resource = null
	
	constructor(location, label = 'asset') {
		super(location, label)
		
		this.location = location
		this.setupLoadEventListener()
	}
	
	load() {}
	
	// Helper function.
	setupLoadEventListener() {
		if (typeof this.resource.addEventListener === 'function') {
			this.resource.addEventListener('load', (event) => this.onLoad(event))
			return true
		}
		return false
	}
	
	onLoad(event) {
		this.logDebug(`Resource "${this.location} loaded`)
	}
}

class AssetImage extends Asset {
	
	constructor(location, label = 'asset_image') {
		super(location, label)
		
		this.resource = new Image()
		this.setupLoadEventListener()
	}
	
	load() {
		this.resource.src = this.location
	}
	
	onLoad(event) {
		this.logDebug(`Image "${this.location} loaded`)
	}
}

class AssetSprite extends AssetImage {
	constructor(location, label = 'asset_sprite') {
		super(location, label)
	}
}

export { Asset, AssetImage, AssetSprite };
