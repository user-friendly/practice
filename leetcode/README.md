
LEETCODE
========

Easy:

1. #2016 Maximum Difference Between Increasing Elements

[LeetCode](https://leetcode.com/problems/maximum-difference-between-increasing-elements/),
[Solution](./2016/solution.js)\
Date: 10/13/2025

Naive algorithm.

2. #1 Two Sum

[LeetCode](https://leetcode.com/problems/two-sum/),
[Solution](./1/solution.js)\
Date: 10/13/2025

Naive algorithm.
Hash table can be used, how?

3. #9 Palindrome Number

[LeetCode](https://leetcode.com/problems/palindrome-number),
[Solution](./9/solution.js)\
Date: 10/13/2025

Naive algorithm.

4. #13 Roman to Integer

[LeetCode](https://leetcode.com/problems/roman-to-integer),
[Solution](./13/solution.js)\
Date: 10/14/2025

Meh.

5. !!!FAIL!!! #14 Longest Common Prefix

[LeetCode](https://leetcode.com/problems/longest-common-prefix),
[Solution](./14/solution.js)\
Date: 10/14/2025

Shame!

6. #20 Valid Parentheses

[LeetCode](https://leetcode.com/problems/valid-parentheses/),
[Solution](./20/solution.js)\
Date: 10/14/2025

The checks can be optimized, it's a sloppy job.

7. #21 Merge Two Sorted Lists

[LeetCode](https://leetcode.com/problems/merge-two-sorted-lists),
[Solution](./21/solution.js)\
Date: 10/15/2025

This one took a while, quite a while. The solution is complicated and
I tested the code many times, getting errors and adjusting the code.
No good! I would call this a fail, but have to move forward.

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

[LeetCode](https://leetcode.com/problems/remove-duplicates-from-sorted-array),
[Solution](./26/solution.js)\
Date: 10/15/2025

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

[LeetCode](https://leetcode.com/problems/remove-element),
[Solution](./27/solution.js)\
Date: 10/15/2025

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

10. #2022 Convert 1D Array Into 2D Array

[LeetCode](https://leetcode.com/problems/convert-1d-array-into-2d-array),
[Solution](./2022/solution.js)\
Date: 10/16/2025

As usual, ran the code on the machine instead of reviewing it.
Set the offset as `i * m` instead of `i * n`, which could've been avoided if I gave it a bit of thought.
