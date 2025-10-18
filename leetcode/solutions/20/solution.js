import { inputReaderHelper } from '#lib/input-reader'

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const open = {
        '(': true,
        '[': true,
        '{': true,
    }

    const close = {
        ')': '(',
        ']': '[',
        '}': '{',
    }
    const stack = []

    let c = ''
    for (let i = 0; i < s.length; i++) {
        c = s[i]
        if (open[c] === true) {
            stack.push(c)
            continue;
        }
        if (close[c] !== undefined && close[c] !== stack.pop()) {
            return false
        }
    }

    return stack.length === 0
}

inputReaderHelper(isValid)
