'use strict'

let crypto = null

if (typeof process !== 'undefined') {
	crypto = await import('node:crypto')
}
else if (typeof window.crypto !== 'undefined') {
	crypto = window.crypto
}
else {
	throw 'Could not find suitable Crypto object.'
}

export default crypto
