import { inputReaderHelper } from '#lib/input-reader'

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let end = 0
    do {
        let c = false
        for (let i = 0; i < strs.length; i++) {
            if (end >= strs[i].length) {
                return strs[0].substr(0, end)
            }
            // Excessive checking.
            if (!c) {
                c = strs[i][end]
            }
            if (c !== strs[i][end]) {
                return strs[0].substr(0, end)
            }
        }
    } while (++end > 0)

    throw "Should never reach end of function."
}

inputReaderHelper(longestCommonPrefix)
