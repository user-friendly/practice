import { inputReaderHelper } from '#lib/input-reader'

/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var canMakeSquare = function (grid) {
    // Because the matrix is a static 3x3, there is a static set of sub-matricies. // There are four (4) 2x3 sub-matricies.

    // A solution is to count the difference between Bs and Ws, in each sub-matrix and make sure at least one is different than 0.

    let map = {
        W: 0,
        B: 0
    }

    // Upper half.

    map[grid[0][0]]++
    map[grid[0][1]]++
    map[grid[1][0]]++
    map[grid[1][1]]++

    if (map.W - map.B !== 0) {
        return true
    }

    map = {
        W: 0,
        B: 0
    }

    map[grid[0][1]]++
    map[grid[0][2]]++
    map[grid[1][1]]++
    map[grid[1][2]]++

    if (map.W - map.B !== 0) {
        return true
    }

    map = {
        W: 0,
        B: 0
    }

    // Lower half.

    map[grid[1][0]]++
    map[grid[1][1]]++
    map[grid[2][0]]++
    map[grid[2][1]]++

    if (map.W - map.B !== 0) {
        return true
    }

    map = {
        W: 0,
        B: 0
    }

    map[grid[1][1]]++
    map[grid[1][2]]++
    map[grid[2][1]]++
    map[grid[2][2]]++

    if (map.W - map.B !== 0) {
        return true
    }

    return false
}

inputReaderHelper(canMakeSquare)
