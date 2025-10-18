import { inputReaderHelper } from '#lib/input-reader'

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    // All negative integers are not palindromes.
    if (x < 0) {
        return false
    }
    // Single digit positive numbers should be all valid?
    if (x < 10) {
        return true
    }
    // Naive, convert to str.
    let str = x.toString()
    let lower = Math.floor(str.length / 2)
    for (let i = 0; i < lower; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }
    return true

    // Silly solution.
    //return x === parseInt(x.toString().split("").reverse().join(""))
}

inputReaderHelper(isPalindrome)
