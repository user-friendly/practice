import { inputReaderHelper } from '#lib/input-reader'

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // There is a constraint for string length to be equal or greater than 0.
    //strs = strs.filter(str => str.length > 0)

    // Simultaneously examine each string, sequentially?
    /*
    0 => d  [0,     1],  c [2,      3,     4]
    1 => o  [0,     1],  a [2,      3,     4]
    2 => g  [0,     1],  r [2,      3,     4]
    3 => i  [0], g [1], '' [2],  d [3], b [4]
    4 => e  [0], o [1], '' [2,      3], o [4]
    5 => '' [0,     1,      2,      3], r [4]

    dogie
    doggo
    car
    card
    carborator
    */

    let i = 0,
        j = 0
    while (i > 0) {
        for (j = 0; j < strs.length; j++) {

        }
    }

    return "a"
}

inputReaderHelper(longestCommonPrefix)
