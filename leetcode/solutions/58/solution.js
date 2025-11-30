import { inputReaderHelper } from '#lib/input-reader'

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    // Might not be the fastest.
    // return s.split(' ').filter(s => s.length > 0).pop().length
    let len = 0
    for (let i = s.length - 1; i >= 0; i--) {
        // Ignore trailing WS.
        if (len === 0 && s[i] === ' ') {
            continue;
        }

        if (s[i] !== ' ') {
            len++
        } else {
            break;
        }
    }
    return len
}

inputReaderHelper(lengthOfLastWord)
