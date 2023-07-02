'use strict'

import Logger from './Logger.mjs'

import { Asset, AssetImage, AssetSprite } from './Assets.mjs'

let assetManager = null

class AssetManager extends Logger {
	assets = []
	location = []
	
	constructor() {
		super()
		
		this.logDebug('Asset manager initialized')
	}
	
	registerAsset(asset) {
		if (this.assets[asset.id] !== undefined) {
			throw "Asset already registered."
		}
		this.location[asset.location] = asset
		return this.assets[asset.id] = asset
	}
	
	isRegistered(asset) {
		return this.assets[asset.id] !== undefined
	}
}

assetManager = new AssetManager()

export default assetManager
