
LEETCODE
========

Easy:

1. #2016 Maximum Difference Between Increasing Elements

[LeetCode](https://leetcode.com/problems/maximum-difference-between-increasing-elements/),
[Solution](./solutions/2016/solution.js)\
Date: 10/13/2025

Naive algorithm.

2. #1 Two Sum

[LeetCode](https://leetcode.com/problems/two-sum/),
[Solution](./solutions/1/solution.js)\
Date: 10/13/2025

Naive algorithm.
Hash table can be used, how?

3. #9 Palindrome Number

[LeetCode](https://leetcode.com/problems/palindrome-number),
[Solution](./solutions/9/solution.js)\
Date: 10/13/2025

Naive algorithm.

4. #13 Roman to Integer

[LeetCode](https://leetcode.com/problems/roman-to-integer),
[Solution](./solutions/13/solution.js)\
Date: 10/14/2025

Meh.

5. !!!FAIL!!! #14 Longest Common Prefix

[LeetCode](https://leetcode.com/problems/longest-common-prefix),
[Solution](./solutions/14/solution.js)\
Date: 10/14/2025

Shame!

6. #20 Valid Parentheses

[LeetCode](https://leetcode.com/problems/valid-parentheses/),
[Solution](./solutions/20/solution.js)\
Date: 10/14/2025

The checks can be optimized, it's a sloppy job.

7. #21 Merge Two Sorted Lists

[LeetCode](https://leetcode.com/problems/merge-two-sorted-lists),
[Solution](./solutions/21/solution.js)\
Date: 10/15/2025

This one took a while, quite a while. The solution is complicated and
I tested the code many times, getting errors and adjusting the code.
No good! I would call this a fail, but have to move forward.

8. #26 Remove Duplicates from Sorted Array

[LeetCode](https://leetcode.com/problems/remove-duplicates-from-sorted-array),
[Solution](./solutions/26/solution.js)\
Date: 10/15/2025

Great! Figured it out pretty fast. Beats 100%? Nah, just that there are no better solutions.

9. 27# Remove Element

[LeetCode](https://leetcode.com/problems/remove-element),
[Solution](./solutions/27/solution.js)\
Date: 10/15/2025

Figured out the solution would be very similar to the previous one (#26) and it was!
However, I did run the test cases before even verifying code. About the same as #21,
but with less spam.

10. #2022 Convert 1D Array Into 2D Array

[LeetCode](https://leetcode.com/problems/convert-1d-array-into-2d-array),
[Solution](./solutions/2022/solution.js)\
Date: 10/16/2025

As usual, ran the code on the machine instead of reviewing it.
Set the offset as `i * m` instead of `i * n`, which could've been avoided if I gave it a bit of thought.

11. #110 Balanced Binary Tree

[LeetCode](https://leetcode.com/problems/balanced-binary-tree/),
[Solution](./solutions/110/solution.js)\
Date: 10/22/2025

This one took me probably more than 6 hours (plus pondering on the side) because of the helper/utility library. Similar issue with the linked list from the "merge sorted lists" problem.
Worked the recursive solutions in about 20 mins. One failed submit, because I had enough, hah. And as usual, I don't verify the code before running it. This has been a very, very long standing issue for me.

12. #112 Path Sum

[LeetCode](https://leetcode.com/problems/path-sum/),
[Solution](./solutions/112/solution.js)\
Date: 10/23/2025

Figuring out a rough plan was easy. Implementing and refactoring (removing the nexted walker function) took about 30 mins.
Good exercise overall.

13. #2980 Check if Bitwise OR Has Trailing Zeros

[LeetCode](https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros),
[Solution](./solutions/2980/solution.js)\
Date: 10/23/2025

Wow, for such a long description it was easy. But, shame to admit first iteration was fail. All I had to do is just realize at least two numbers are needed.

14. #1323 Maximum 69 Number

[LeetCode](https://leetcode.com/problems/maximum-69-number),
[Solution](./solutions/1323/solution.js)\
Date: 10/??/2025

Missed the simple case of the single digit being 6 - return 9 for numbers less than 10.
So only one failed submission, but still for an easy problem that's one too much.

solution.js:
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    if (num < 10) {
        return 9
    }

    // Just flip the left most 6 to a 9.

    let digits = num.toString().split('')

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] === '6') {
            digits[i] = '9'
            break;
        }
    }

    return parseInt(digits.join(''))
}

#3033 Modify the Matrix
https://leetcode.com/problems/modify-the-matrix

Took me a while. Failed one test run, because the test case was invalid. I didn't read one of the constraints.

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function(matrix) {
    const MIN = -1
    const newMatrix = new Array(matrix.length)

    for (let m = 0; m < matrix.length; m++) {
        newMatrix[m] = (new Array(matrix[0].length))
    }

    for (let n = 0; n < matrix[0].length; n++) {
        // Stores the index at which a MIN was found in a column, if one was found.
        // Could also be the all, except one (n-1 are MINs) - the worst case.
        let replace = []
        // Set the max to the minimum. It is possible to have a column of all minimums.
        let max = MIN

        for (let m = 0; m < matrix.length; m++) {
            newMatrix[m][n] = matrix[m][n]
            // Check for max.
            if (matrix[m][n] > max) {
                max = matrix[m][n]
            }
            // Check for MIN.
            if (matrix[m][n] === MIN) {
                replace.push(m)
            }
        }
        // Replace MINs with max. 
        for (const m of replace) {
            newMatrix[m][n] = max
        }
    }

    return newMatrix
}

#2704 To Be Or Not To Be
https://leetcode.com/problems/to-be-or-not-to-be

This was interesting! Very simple at first, but again, I didn't read well enough. Did quite a few of test cases. Probably coz I had to pee.

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: (compVal) => {
            if (val === compVal) {
                return true
            } else {
                throw "Not Equal"
            }
        },
        notToBe: (compVal) => {
            if (val !== compVal) {
                return true
            } else {
                throw "Equal"
            }
        }
    }
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

#3127 Make a Square with the Same Color
https://leetcode.com/problems/make-a-square-with-the-same-color

TODO Implement.

/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var canMakeSquare = function(grid) {
    
}
