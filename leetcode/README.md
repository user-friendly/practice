
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
Date: 10/24/2025

Missed the simple case of the single digit being 6 - return 9 for numbers less than 10.
So only one failed submission, but still for an easy problem that's one too much.

15. #3033 Modify the Matrix

[LeetCode](https://leetcode.com/problems/modify-the-matrix),
[Solution](./solutions/3033/solution.js)\
Date: 10/24/2025

Took me a while. Failed one test run, because the test case was invalid. I didn't read one of the constraints.

16. #2704 To Be Or Not To Be

[LeetCode](https://leetcode.com/problems/to-be-or-not-to-be),
[Solution](./solutions/2704/solution.js)\
Date: 10/24/2025

This was interesting! Very simple at first, but again, I didn't read well enough. Did quite a few of test cases.

17. #3127 Make a Square with the Same Color

[LeetCode](https://leetcode.com/problems/make-a-square-with-the-same-color),
[Solution](./solutions/3127/solution.js)\
Date: 10/24/2025

Hah, the solution is silly, but it works.

18. #28 Find the Index of the First Occurrence in a String

[LeetCode](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string),
[Solution](./solutions/28/solution.js)\
Date: 10/24/2025

Hah, JS has String.indexOf. Super easy, but actual interview would probably ask for primitive impl.
I dropped a comment in the solution.js - double pointer. Should be pretty easy.

18. #14 Longest Common Prefix

[LeetCode](https://leetcode.com/problems/longest-common-prefix),
[Solution](./solutions/14/solution.js)\
Date: 10/26/2025

Totally misunderstood the problem's constraints. It's the longest common prefix amongst **ALL** strings!
If of 100 strings, 99 strings are all "car", but the remining one is "dog" then there's no common prefix.
Not so challenging as I initially thought. The challenge was reading comprehension!!!

19. #2970 Count the Number of Incremovable Subarrays I

[LeetCode](https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i),
[Solution](./solutions/2970/solution.js)\
Date: 10/28/2025

The important thing I didn't notice after reading the description is that the increment between subsequent elements doesn't need to be exactly 1, but any positive integer (within limits, of course).

After about 2 hours (with about an hour break in-between) I gave in to the dumbest solution. It beats 93.75%  of submissions on runtime complexity. Wtf? I mean, the data set is very small, but there has to be some better solution.

19. #1379 Find a Corresponding Node of a Binary Tree in a Clone of That Tree

[LeetCode](https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree),
[Solution](./solutions/1379/solution.js)\
Date: 11/29/2025

Since this is just "find node in BTree" I'll simplify the problem a bit.
Took a while to figure this out, due to "mental block."

20. #2660 Determine the Winner of a Bowling Game

[LeetCode](https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/description/),
[Solution](./solutions/1379/solution.js)\
Date: 11/29/2025

Failed on first submission because of the ternary operator, trying to be clever.

21. !!!FAIL!!! #35 Search Insert Position

[LeetCode](https://leetcode.com/problems/search-insert-position/),
[Solution](./solutions/35/solution.js)\
Date: ??/??/202?

Requires runtime to be O(log2(N)), possible given the array is sorted and has distinct elements. It is essentially a binary search solution.
Big fail! Still having trouble implementing non-recursive binary search.

22. #58 Length of Last Word

[LeetCode](https://leetcode.com/problems/length-of-last-word/),
[Solution](./solutions/58/solution.js)\
Date: 11/29/2025

Naive impl might be to just (in JS) split on space, filter empty arrays, pop last, get length.
But traversing backwards would be more efficient. LC: beats 100% runtime!!! Yeah right.

23. #66 Plus One

[LeetCode](https://leetcode.com/problems/plus-one/),
[Solution](./solutions/66/solution.js)\
Date: 11/29/2025

Oh, fell for the "This is really easy!" trap again. A couple of edge cases got me - two failed submissions.

24. #67 Add Binary

[LeetCode](https://leetcode.com/problems/add-binary/),
[Solution](./solutions/67/solution.js)\
Date: 11/30/2025

Should be easy if you know how binary math works, right?
This is a problem for "tomorrow me".

It wasn't that easy, but no failed submits.
								- Tomorrow Me

25. !!!FAIL!!! #69 Sqrt(x)

[LeetCode](https://leetcode.com/problems/sqrtx/),
[Solution](./solutions/69/solution.js)\
Date: 11/??/2025

I'd say the brute force solution is a fail.
To be revised later.

26. #70 Climbing Stairs

[LeetCode](https://leetcode.com/problems/climbing-stairs/),
[Solution](./solutions/70/solution.js)\
Date: 11/??/2025

Wow, this one is not easy at all!

27. #?? ??? ??? ???

[LeetCode](https://example.com/problem/??),
[Solution](./solutions/??/solution.js)\
Date: ??/??/2025

28. #?? ??? ??? ???

[LeetCode](https://example.com/problem/??),
[Solution](./solutions/??/solution.js)\
Date: ??/??/2025
