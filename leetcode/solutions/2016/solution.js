import { inputReaderHelper } from '#lib/input-reader'

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
    // v1
    let max = 0, i = 0, j = 0
    for (i = 0; i < nums.length - 1; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (max < nums[j] - nums[i]) {
                max = nums[j] - nums[i]
            }
        }
    }

    return max > 0 ? max : -1
}

inputReaderHelper(maximumDifference)
