'use strict'

class Asset {
	// Name/label of the asset. Mostly for debug purposes?
	name = null
	// The resource location on the web or disk.
	location = null
	// The resource object.
	resource = null
	
	constructor(location, name = 'asset') {
		this.location = location
		this.name = name
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
