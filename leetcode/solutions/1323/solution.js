import { inputReaderHelper } from '#lib/input-reader'

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    if (num < 10) {
        return 9
    }

    // Just flip the left most 6 to a 9.

    let digits = num.toString().split('')

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] === '6') {
            digits[i] = '9'
            break;
        }
    }

    return parseInt(digits.join(''))
}

inputReaderHelper(maximum69Number)
