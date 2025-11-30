import { inputReaderHelper } from '#lib/input-reader'

/**
 * There are a small set of cases:
 * 
 * ai xor bi is 1 and no carry over => 1
 * ai and bi is 1 and no carry over => 0, set carry over to 1 (it was produced)
 * ai and bi is 0 and no carry over => 0
 * 
 * ai and bi is 1 and carry over => 1, set carry over to 1 (it was consumed and produced)
 * ai and bi is 0 and carry over => 1, set carry over to 0 (it was consumed)
 * ai xor bi is 1 and carry over => 0, set carry over to 1 (it was consumed and produced)
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let long = (a.length > b.length) ? a : b,
        short = (a.length > b.length) ? b : a,
        sum = [],
        carry = false,
        c = null, d = null
    
    for (let i = long.length - 1, j = short.length - 1; i >= 0; i--, j--) {
        c = long[i]
        d = (short[j] !== undefined ) ? short[j] : '0'

        if (carry) {
            if (c === '1' ^ d === '1') {
                sum.push('0')
            } else {
                sum.push('1')

                if (c === '1' && d === '1') {
                    carry = true
                } else {
                    carry = false
                }
            }
        } else {
            if (c === '1' ^ d === '1') {
                sum.push('1')
            } else {
                sum.push('0')

                if (c === '1' && d === '1') {
                    carry = true
                }
            }
        }
    }

    // Last consume of carry.
    if (carry) {
        sum.push('1')
    }

    return sum.reverse().join('')
}

inputReaderHelper(addBinary)
