#!/usr/bin/env python3

from typing import List

# from ...pylib import helper

import testcases

class Solution:
    def TODO_Implement(self, nums: List[int], mult: int) -> int:
        return sum([n * mult for n in nums])

def problem(*args, **kwargs):
    solution = Solution()
    return solution.TODO_Implement(*args, **kwargs)

for case in testcases.all:
    ret = problem(*case[1:])
    assert ret == case[0], f"\033[1;31mfailed test, expected `{case[0]}`, got `{ret}`, case: {case}\033[0;0m"

print("\033[0;32mAll tests cases passed.\033[0;0m")
