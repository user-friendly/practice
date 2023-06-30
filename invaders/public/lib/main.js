'use strict'

console.log('main.js: executing...');

document.addEventListener('load', () => console.log('main.js: load event fired'))

document.addEventListener('DOMContentLoaded', () => console.log('main.js: DOMContentLoaded event fired'))
