
import { EOL } from "node:os"

/**
 * Proxy for stdout.write.
 * 
 * @param {any} chunk
 * @returns
 */
function print(chunk, encoding = null, callback = null) {
    return process.stdout.write(chunk, encoding, callback)
}

/**
 * Proxy for stdout.write.
 * 
 * @param {string} chunk
 * @returns
 */
function println(chunk, encoding = null, callback = null) {
    return process.stdout.write(chunk + EOL, encoding = null, callback = null)
}

export { print, println, EOL }
