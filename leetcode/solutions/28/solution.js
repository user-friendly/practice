import { inputReaderHelper } from '#lib/input-reader'

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // Builtins not allowed?
    // Loop's end index is haystack.length - needle.length.
    // Loop uses two pointers - one for haystack (main), one for needle.
    // Upon first match, start moving the needle pointer forward, freeze haystack pointer.
    // Move only needle pointer on matches.
    // On mismatch set haystack pointer to needle pointer, reset needle pointer.
    // On needle pointer reaching end of needle length, return haystack pointer.
    // Last function stmt is `return -1`, id est loop reached end and didn't match anythin.
    return haystack.indexOf(needle)
}

inputReaderHelper(strStr)
