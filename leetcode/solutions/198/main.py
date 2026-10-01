#!/usr/bin/env python3

# from pylib.listnode import ListNode
from .testcases import all as testcases

# Stock LC solution + what Claude spit out.
# class Solution:
#     def rob(self, nums: list[int]) -> int:
#         if len(nums) == 1:
#             return nums[0]

#         mem = [0] * len(nums)
#         mem[0] = nums[0]
#         mem[1] = max(nums[0], nums[1])

#         for i in range(2, len(nums)):
#             mem[i] = max(mem[i - 1], nums[i] + mem[i - 2])

#         return mem[-1]


class Solution:
    def rob(self, nums: list[int]) -> int:
        if len(nums) == 1:
            return nums[0]
        elif len(nums) == 2:
            return nums[0] if nums[0] > nums[1] else nums[1]
        elif len(nums) == 3:
            return nums[1] if nums[1] > nums[0] + nums[2] else nums[0] + nums[2]

        mem = [0] * len(nums)
        mem[0] = nums[0]
        mem[1] = nums[1]

        for i in range(2, len(nums)):
            mem[i] = nums[i] + mem[i - 2]

            if mem[i] < nums[i] + mem[i - 3]:
                mem[i] = nums[i] + mem[i - 3]

            if mem[i] < mem[i - 1]:
                mem[i] = mem[i - 1]

        return mem[-1] if mem[-1] > mem[-2] else mem[-2]


def problem(*args, **kwargs):
    solution = Solution()
    return solution.rob(*args, **kwargs)


for case in testcases:
    ret = problem(*case[1:])
    assert (
        ret == case[0]
    ), f"\033[1;31mfailed test, expected `{case[0]}`, got `{ret}`, case: {case}\033[0;0m"

print("\033[0;32mAll tests cases passed.\033[0;0m")
