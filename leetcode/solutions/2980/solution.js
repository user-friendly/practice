import { inputReaderHelper } from '#lib/input-reader'

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var hasTrailingZeros = function (nums) {
    let first = false
    for (const n of nums) {
        if (n % 2 === 0) {
            if (first) {
                return true
            } else {
                first = true
            }
        }
    }
    return false
}

inputReaderHelper(hasTrailingZeros)
