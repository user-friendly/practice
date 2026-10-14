#!/usr/bin/env python3

# from pylib.listnode import ListNode
from .testcases import all as testcases


# Yes, much much cleaner.
class Solution_LeetCode:
    def removeDuplicates(self, nums: list[int]) -> int:
        k = 2
        for i in range(2, len(nums)):
            if nums[i] != nums[k - 2]:
                nums[k] = nums[i]
                k += 1
        return k


class Solution:
    def removeDuplicates(self, nums: list[int]) -> int:
        # k is writer, i is scanner
        k = 0

        for i in range(1, len(nums)):
            if nums[k] != nums[i]:
                k += 1
                nums[k] = nums[i]
            elif k - 1 < 0 or nums[k - 1] != nums[i]:
                k += 1
                nums[k] = nums[i]

        return k + 1


def problem(*args, **kwargs):
    solution = Solution()
    k = solution.removeDuplicates(*args, **kwargs)
    return [k, args[0]]


for case in testcases:
    ret = problem(*case[1:])
    assert (
        ret[0] == case[0][0]
    ), f"\033[1;31mfailed test, expected `{case[0][0]}`, got `{ret[0]}`, case: {case}\033[0;0m"
    assert (
        ret[1][: ret[0]] == case[0][1]
    ), f"\033[1;31mfailed test, expected `{case[0][1]}`, got `{ret[1][: ret[0]]}`, case: {case}\033[0;0m"

print("\033[0;32mAll tests cases passed.\033[0;0m")
