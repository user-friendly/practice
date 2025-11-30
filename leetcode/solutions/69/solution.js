import { inputReaderHelper } from '#lib/input-reader'


/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    // Naive way, will not be accepted at an interview.
    // return Math.floor(Math.sqrt(x))

    if (x === 0 || x === 1) {
        return x
    }

    // Brute force.
    let r = 2
    while (r * r < x) {
        r += 1
    }
    return (r * r === x) ? r : r - 1
}

inputReaderHelper(mySqrt)
