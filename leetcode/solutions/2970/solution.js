import { inputReaderHelper } from '#lib/input-reader'

// Note that one of the constraints is that the minimum elements in each array is 1.
// Therefore, all arrays with one element have total of one "incremovable" (wut?) subarrays.

// A brute force approach can be to go through all combinations (are these combinations or variations or permutations?) and check the array. Time complexity would explode!

// Notice for the first example, the range [1..4], we can calculate how many total subarrays are there. All we need to do is make sure the relationship holds between i and i+1 elements.

// Totals for a continous [1..n] is:
// n + n/2 + n/3 + ... n/n - nope this does not work, also doesn't make any sense.
// Another way to think about it is if you were to move the frame (subarrays elements) from one end to the other, by one.
// Includes the initial placement.
// Subarray of size 1:
// n - place the element on element 0, move one to the right (on 1), one more to the right (on 2), etc.
// Subarray of size 2:
// n-2 - the subarray can be shifted to the right n-2 times
// ... and so on
// General formula:
// n + n-2 + n-3 ... + n-(n-1) - this looks like the sequential integer summation formula in reverse?
// (n(n + 1))/2 - I looked it up.

/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function (nums) {
    let total = 1

}

inputReaderHelper(incremovableSubarrayCount)
