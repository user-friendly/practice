import { inputReaderHelper } from '#lib/input-reader'


inputReaderHelper(solution)

function solution(data) {
    // Custom code goes here!
    return construct2DArray.apply(null, data)
}

/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
    if (original.length != m * n) {
        return []
    }

    let ary = []
    for (let i = 0; i < m; i++) {
        ary.push(original.slice(
            i * n,
            i * n + n
        ))
    }

    return ary
}
