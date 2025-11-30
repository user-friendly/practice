import { inputReaderHelper } from '#lib/input-reader'

/**
 * Binary Search
 * 
 *O 1
 *E 1, 2
 *O 1, 2, 3
 *E 1, 2, 3, 4
 *O 1, 2, 3, 4, 5
 *E 1, 2, 3, 4, 5, 6
 *O 1, 2, 3, 4, 5, 6, 7
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    if (nums.length === 1) {
        return nums[0] > target ? 0 : 1
    }

    throw "TODO Implement BS, no recursion. See 'binary' directory."

    return -1
}

inputReaderHelper(searchInsert)
