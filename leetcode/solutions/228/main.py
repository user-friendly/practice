#!/usr/bin/env python3

from typing import List

# from ...pylib import helper

import testcases

class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        ranges = []

        # Empty list edge case.
        if len(nums) <= 0:
            return []
        # One element range case.
        elif len(nums) == 1:
            return [str(nums[0])]

        GLUE = "->"        
        # Init range to first element.
        a = 0
        for k in range(1, len(nums)):
            # If not consecutive,
            if nums[k] - nums[k - 1] > 1:
                if k - a > 1:
                    ranges.append(f"{nums[a]}{GLUE}{nums[k - 1]}")
                else:
                    ranges.append(str(nums[a]))
                a = k
        pass

        if k > a:
            ranges.append(f"{nums[a]}{GLUE}{nums[k]}")
        else:
            ranges.append(str(nums[k]))
        pass
        
        return ranges

def problem(*args, **kwargs):
    solution = Solution()
    return solution.summaryRanges(*args, **kwargs)

for case in testcases.all:
    ret = problem(*case[1:])

    assert len(ret) == len(case[0]), f"\033[1;31mfailed test, (lengths) expected `{case[0]}`, got `{ret}`, case: {case}\033[0;0m"

    for k, v in enumerate(case[0]):
      assert ret[k] == case[0][k], f"\033[1;31mfailed test, expected `{case[0]}`, got `{ret}`, case: {case}\033[0;0m"

print("\033[0;32mAll tests cases passed.\033[0;0m")
