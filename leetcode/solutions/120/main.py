#!/usr/bin/env python3

# from pylib.listnode import ListNode
from .testcases import all as testcases


class Solution:
    def minimumTotal(self, triangle: list[list[int]]) -> int:
        mem: list[int] = triangle[-1].copy()

        for i in reversed(range(len(triangle) - 1)):
            for j in range(len(triangle[i])):
                mem[j] = triangle[i][j] + min(mem[j], mem[j + 1])

        return mem[0]


def problem(*args, **kwargs):
    solution = Solution()
    return solution.minimumTotal(*args, **kwargs)


for case in testcases:
    ret = problem(*case[1:])
    assert (
        ret == case[0]
    ), f"\033[1;31mfailed test, expected `{case[0]}`, got `{ret}`, case: {case}\033[0;0m"

print("\033[0;32mAll tests cases passed.\033[0;0m")
