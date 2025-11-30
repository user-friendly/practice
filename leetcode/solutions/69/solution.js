import { inputReaderHelper } from '#lib/input-reader'


/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    // Naive way, will not be accepted at an interview.
    return Math.floor(Math.sqrt(x))
}

inputReaderHelper(mySqrt)
