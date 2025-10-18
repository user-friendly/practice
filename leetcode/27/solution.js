import { inputReaderHelper } from '#lib/input-reader'

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let k = 0, i = 0
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i++] = nums[j]
            k++
        }
    }

    return k
}

inputReaderHelper((nums, val) => {
    const k = removeElement(nums, val)
    return nums.slice(0, k)
})

