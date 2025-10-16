import { inputReaderHelper } from '#lib/input-reader'

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let i = 0, j = 0
    
    for (i = 0; i < nums.length; i++) {
        for (j = 0; j < nums.length; j++) {
            if (target === nums[i] + nums[j]
                && i != j
            ) {
                return [i, j]
            }
        }
    }
}

inputReaderHelper(twoSum)
