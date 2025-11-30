import { inputReaderHelper } from '#lib/input-reader'

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    const last = digits.length - 1

    if (digits[last] < 9) {
        digits[last]++
        return digits
    }

    for (let i = last; i >= 0; i--) {
        if (digits[i] === 9) {
            if (i === 0) {
                digits[i] = 1
                digits.push(0)
            } else {
                digits[i] = 0
            }
        } else {
            digits[i]++
            break;
        }
    }

    return digits
}

inputReaderHelper(plusOne)
