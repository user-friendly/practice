import { inputReaderHelper } from '#lib/input-reader'

/**
 * n = 2
 * 1 > 1
 * 2
 * 
 * n = 3
 * 1 > 1 > 1
 * collapses to:
 * 1 > 2
 * 2 > 1
 * 
 * n = 4
 * 1 > 1 > 1 > 1
 * 
 * collapse both sides:
 * 2 > 2
 * 
 * collapse left:
 * 2 > 1 > 1
 * 
 * collapse middle:
 * 1 > 2 > 1
 * 
 * collapse right:
 * 1 > 1 > 2
 * 
 * n = 5
 * 1 > 1 > 1 > 1 > 1
 * 
 * collapse one pair, moving left to right: 
 * 2 > 1 > 1 > 1
 * 1 > 2 > 1 > 1
 * 1 > 1 > 2 > 1
 * 1 > 1 > 1 > 2
 * 
 * 2 > 2 > 1 (collapse form from 2 > 1 > 1 > 1 or 1 > 1 > 2 > 1)
 * 2 > 1 > 2 (collapse form from 2 > 1 > 1 > 1 or 1 > 1 > 1 > 2)
 * 1 > 2 > 2 (collapse form from 1 > 2 > 1 > 1 or 1 > 1 > 1 > 2)
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
