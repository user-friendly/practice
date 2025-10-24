import { inputReaderHelper } from '#lib/input-reader'

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function (matrix) {
    const MIN = -1
    const newMatrix = new Array(matrix.length)

    for (let m = 0; m < matrix.length; m++) {
        newMatrix[m] = (new Array(matrix[0].length))
    }

    for (let n = 0; n < matrix[0].length; n++) {
        // Stores the index at which a MIN was found in a column, if one was found.
        // Could also be the all, except one (n-1 are MINs) - the worst case.
        let replace = []
        // Set the max to the minimum. It is possible to have a column of all minimums.
        let max = MIN

        for (let m = 0; m < matrix.length; m++) {
            newMatrix[m][n] = matrix[m][n]
            // Check for max.
            if (matrix[m][n] > max) {
                max = matrix[m][n]
            }
            // Check for MIN.
            if (matrix[m][n] === MIN) {
                replace.push(m)
            }
        }
        // Replace MINs with max. 
        for (const m of replace) {
            newMatrix[m][n] = max
        }
    }

    return newMatrix
}

inputReaderHelper(modifiedMatrix)
