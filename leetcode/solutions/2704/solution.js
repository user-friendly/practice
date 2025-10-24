import { inputReaderHelper } from '#lib/input-reader'

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    return {
        toBe: (compVal) => {
            if (val === compVal) {
                return true
            } else {
                throw "Not Equal"
            }
        },
        notToBe: (compVal) => {
            if (val !== compVal) {
                return true
            } else {
                throw "Equal"
            }
        }
    }
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

inputReaderHelper(expect)
