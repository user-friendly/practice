import { inputReaderHelper } from '#lib/input-reader'

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let k = 1, i = 0
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            nums[++i] = nums[j]
            k++
        }
    }

    return k
}

inputReaderHelper((nums) => {
    const k = removeDuplicates(nums)
    return nums.slice(0, k)
})
