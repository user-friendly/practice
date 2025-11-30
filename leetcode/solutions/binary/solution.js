import { inputReaderHelper } from '#lib/input-reader'

throw "TODO Needs more work."

/**
 * Binary Search
 
 O 1, 2, 3
 O 1, 2, 3, 4, 5
 O 1, 2, 3, 4, 5, 6, 7
 O 1, 2, 3, 4, 5, 6, 7, 8, 9

 E 1, 2, 3, 4
 E 1, 2, 3, 4, 5, 6
 E 1, 2, 3, 4, 5, 6, 7, 8

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var binarySearch = function (nums, target) {
    // Negative index is for not found.
    const notFound = -1

    // At this minimum length requirement BS kicks in.
    const minReq = 3
    // Otherwise, just do a sequential.
    if (nums.length < minReq) {
        for (let i = 0; i, nums.length; i++) {
            if (nums[i] === target) {
                return i
            }
        }
        return notFound
    }

    let len = nums.length,
        // In case of odd lenght.
        // The flooring make sure the index is correct (like - 1).
        p = Math.floor(len / 2)

    while (len > 2) {
        if (nums[p] === target) {
            return p
        }
        len /= 2
        if (nums[p] > target) {
            p -= len
        } else {
            p += len
        }
    }

    return notFound
}

inputReaderHelper(binarySearch)
