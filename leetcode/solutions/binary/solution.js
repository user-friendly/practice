import { inputReaderHelper } from '#lib/input-reader'

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

    const rec = function (i, j) {

    }

    return notFound
}

inputReaderHelper(binarySearch)
