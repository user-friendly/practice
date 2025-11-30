import { inputReaderHelper } from '#lib/input-reader'

/**
 * n = 2
 * 1 > 1
 * 2
 * 
 * n = 3
 * 1 > 1 > 1
 * 1 > 2
 * 2 > 1
 * 
 * n = 4
 * 1 > 1 > 1 > 1
 * 2 > 2
 * 
 * 2 > 1 > 1
 * 1 > 2 > 1
 * 1 > 1 > 2
 * 
 * n = 5
 * 1 > 1 > 1 > 1 > 1
 * 
 * 2 > 2 > 1
 * 2 > 1 > 2
 * 1 > 2 > 2
 * 
 * 2 > 1 > 1 > 1
 * 1 > 2 > 1 > 1
 * 1 > 1 > 2 > 1
 * 1 > 1 > 1 > 2
 * 
 * n = 6
 * 1 > 1 > 1 > 1 > 1 > 1
 * 2 > 2 > 2
 * 
 * (from 5)
 * 2 > 2 > 1 > 1
 * 2 > 1 > 2 > 1
 * 1 > 2 > 2 > 1
 * 
 * 
 * (from 5)
 * 2 > 1 > 1 > 1 > 1
 * 1 > 2 > 1 > 1 > 1
 * 1 > 1 > 2 > 1 > 1
 * 1 > 1 > 1 > 2 > 1
 * 
 */


/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    return -1
}

inputReaderHelper(climbStairs)
