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

    const getPrefix = (a, b) => {
        if (a[0] !== b[0]) {
            return false
        }

        const end = Math.min(a.length, b.length)
        for (let i = 0; i < end; i++) {
            if (a[i] !== b[i]) {
                return a.substr(0, i)
            }
        }
        // In case on of the strings is entirely a prefix or both are.
        return b.length > a.length ? a : b
    }

    let longestPrefix = ""

    for (let i = 0; i < strs.length; i++) {
        // Ignore null strings.
        if (strs[i].length < 1) {
            continue
        }

        for (let j = 0; j < strs.length; j++) {
            // Ignore self & null strings.
            if (i === j || strs[j].length < 1) {
                continue
            }

            const prefix = getPrefix(strs[i], strs[j])
            if (prefix && prefix.length > longestPrefix.length) {
                longestPrefix = prefix
            }
        }
    }

    return longestPrefix
}

inputReaderHelper(longestCommonPrefix)
