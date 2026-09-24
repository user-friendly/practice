#!/usr/bin/env python3

import math

from .testcases import all as testcases


class Solution:
    def climbStairs(self, n: int) -> int:
        j, k = 2, 3

        if n == 1:
            return 1
        elif n == 2:
            return 2

        for i in range(4, n + 1):
            m = j + k
            j = k
            k = m

        return k


def problem(*args, **kwargs):
    solution = Solution()
    return solution.climbStairs(*args, **kwargs)


for case in testcases:
    ret = problem(*case[1:])
    assert (
        ret == case[0]
    ), f"\033[1;31mfailed test, expected `{case[0]}`, got `{ret}`, case: {case}\033[0;0m"

print("\033[0;32mAll tests cases passed.\033[0;0m")
