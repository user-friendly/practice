'use strict'

import Logger from '../Logger.mjs'

import { Asset, AssetImage, AssetSprite } from './Assets.mjs'

let assetManager = null

class AssetManager extends Logger {
	assets = {}
	
	constructor() {
		super()
		this.logDebug('Asset manager initialized')
	}
	
	loadAsset(location, name) {
		throw 'FIXME Implement method.'
	}
	
	loadImage(location, name) {
		throw 'FIXME Implement method.'
	}
	
	loadSprite(location, name) {
		throw 'FIXME Implement method.'
	}
	
	registerAsset(asset) {
		if (this.assets[asset.location] !== undefined) {
			throw "Asset already registered."
		}
		return this.assets[asset.location] = asset
	}
	
	isRegistered(asset) {
		return this.assets[asset.location] !== undefined
	}
	
	isLoaded(asset) {
		throw 'FIXME Implement method.'
	}
}

assetManager = new AssetManager()

export default assetManager
