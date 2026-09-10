#!/usr/bin/env python3

from typing import List

# from pylib.listnode import ListNode
from .testcases import all as testcases


class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        if len(s) == 1:
            return True

        l = {}
        r = {}

        for i, c in enumerate(s):
            if l.get(c) is None:
                # Both must be empty!
                if r.get(t[i]) is not None:
                    return False

                l[c] = t[i]
                r[t[i]] = c

            if l[c] != t[i] or r[t[i]] != c:
                return False

        return True


def problem(*args, **kwargs):
    solution = Solution()
    return solution.isIsomorphic(*args, **kwargs)


for case in testcases:
    ret = problem(*case[1:])
    assert (
        ret == case[0]
    ), f"\033[1;31mfailed test, expected `{case[0]}`, got `{ret}`, case: {case}\033[0;0m"

print("\033[0;32mAll tests cases passed.\033[0;0m")
