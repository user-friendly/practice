
LEETCODE
========

Easy:

Date: 10/13/2025

1. #2016 Maximum Difference Between Increasing Elements
https://leetcode.com/problems/maximum-difference-between-increasing-elements/

Naive algo.

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    // v1
    let max = 0, i = 0, j = 0
    for (i = 0; i < nums.length - 1; i++) {
        for (j = i+1; j < nums.length; j++) {
            if (max < nums[j] - nums[i]) {
                max = nums[j] - nums[i]
            }
        }
    }

    return max > 0 ? max : -1
};
```

2. #1 Two Sum
https://leetcode.com/problems/two-sum/

Naive algo.
Hash table can be used, how?

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
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
};
```

3. #9 Palindrome Number
https://leetcode.com/problems/palindrome-number

Naive algo.

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // All negative integers are not palindromes.
    if (x < 0) {
        return false
    }
    // Single digit positive numbers should be all valid?
    if (x < 10) {
        return true
    }
    // Naive, convert to str.
    let str = x.toString()
    let lower = Math.floor(str.length/2)
    for (let i = 0; i < lower; i++) {
        if (str[i] !== str[str.length-1-i]) {
            return false
        }
    }
    return true
};

// Silly solution.
return x === parseInt(x.toString().split("").reverse().join(""))
```

Date: 10/14/2025

4. #13 Roman to Integer
https://leetcode.com/problems/roman-to-integer

```js
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let n = 0, c = ''

    const base = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    const misc = {
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900,
    }
    
    const miscEnd = s.length-1
    for (let i = 0; i < s.length; i++) {
        c = s[i]
        if (base[c] === undefined) {
            continue
        }

        if (i < miscEnd && (c === 'I' || c === 'X' || c === 'C')) {
            if (misc[c + s[i+1]] !== undefined) {
                n += misc[c + s[i+1]]
                i++
                continue
            }
        }

        n += base[c]
    }

    return n
};
```

5. !!!FAIL!!! #14 Longest Common Prefix
https://leetcode.com/problems/longest-common-prefix

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // There is a constraint for string length to be equal or greater than 0.
    strs = strs.filter(str => str.length > 0)

    // Simultaneously examine each string, sequentially?
    /*
    0 => d  [0,     1],  c [2,      3,     4]
    1 => o  [0,     1],  a [2,      3,     4]
    2 => g  [0,     1],  r [2,      3,     4]
    3 => i  [0], g [1], '' [2],  d [3], b [4]
    4 => e  [0], o [1], '' [2,      3], o [4]
    5 => '' [0,     1,      2,      3], r [4]

    dogie
    doggo
    car
    card
    carborator
    */

    let i = 0,
        j = 0
    while (i > 0) {
        for (j = 0; j < strs.length; j++) {
            
        }
    }

};
```

6. #20 Valid Parentheses
https://leetcode.com/problems/valid-parentheses/

The checks can be optimized, it's a sloppy job.

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const open = {
        '(': true,
        '[': true,
        '{': true,
    }

    const close = {
        ')': '(',
        ']': '[',
        '}': '{',
    }
    const stack = []

    let c = ''
    for (let i = 0; i < s.length; i++) {
        c = s[i]
        if (open[c] === true) {
            stack.push(c)
            continue;
        }
        if (close[c] !== undefined && close[c] !== stack.pop()) {
            return false
        }
    }

    return stack.length === 0
};
```

7. #21 Merge Two Sorted Lists
https://leetcode.com/problems/merge-two-sorted-lists

This one took a while, quite a while. The solution is complicated and
I tested the code many times, getting errors and adjusting the code.
No good! I would call this a fail, but gotto move forward.

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // Special where one of the lists is empty.
    if (!list1) {
        return list2
    }
    if (!list2) {
        return list1
    }

    let root = 0, head = null

    // Initial loop is special, but does it have to be?
    if (list1.val <= list2.val) {
        head = list1
        // Update first list's head.
        list1 = list1.next
    } else {
        head = list2
        // Update first 
        list2 = list2.next
    }
    root = head
    if (head.next === null) {
        if (list1) {
            head.next = list1
        } else if (list2) {
            head.next = list2
        }
        head = null
    }

    while (head) {
        if (list1.val <= list2.val) {
            head.next = list1
            head = list1
            list1 = list1.next
        } else {
            head.next = list2
            head = list2
            list2 = list2.next
        }

        if (head.next === null) {
            if (list1) {
                head.next = list1
            } else if (list2) {
                head.next = list2
            }
            head = null
        }
    }

    return root
};
```

8. #26 Remove Duplicates from Sorted Array
https://leetcode.com/problems/remove-duplicates-from-sorted-array

Great! Figured it out pretty fast. Beats 100%? Nah, just that there are no better solutions.

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 1, i = 0
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            nums[++i] = nums[j]
            k++
        }
    }

    return k
};
```

9. 27# Remove Element
https://leetcode.com/problems/remove-element

Figured out the solution would be very similar to the previous one (#26) and it was!
However, I did run the test cases before even verifying code. About the same as #21,
but with less spam.

```js
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0, i = 0
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i++] = nums[j]
            k++
        }
    }

    return k
};
```

Date: 10/13/2025

10. #2022 Convert 1D Array Into 2D Array

[LT](https://leetcode.com/problems/convert-1d-array-into-2d-array)

[Source](./2022/solution.js)

As usual, ran the code on the machine instead of reviewing it.
Set the offset as `i * m` instead of `i * n`, which could've been avoided if I gave it a bit of thought.
