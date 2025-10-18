import { inputReaderHelper } from '#lib/input-reader'

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let n = 0, c = ''

    const base = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    const misc = {
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900,
    }

    const miscEnd = s.length - 1
    for (let i = 0; i < s.length; i++) {
        c = s[i]
        if (base[c] === undefined) {
            continue
        }

        if (i < miscEnd && (c === 'I' || c === 'X' || c === 'C')) {
            if (misc[c + s[i + 1]] !== undefined) {
                n += misc[c + s[i + 1]]
                i++
                continue
            }
        }

        n += base[c]
    }

    return n
}

inputReaderHelper(romanToInt)
