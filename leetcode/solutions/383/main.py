#!/usr/bin/env python3

from typing import List

# from ...pylib import helper

import testcases


class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        note = {}
        for c in ransomNote:
            if note.get(c) is None:
                note[c] = 1
            else:
                note[c] += 1

        for c in magazine:
            if note.get(c, 0) > 0:
                note[c] -= 1

        return not bool(sum(note.values()))


def problem(*args, **kwargs):
    solution = Solution()
    return solution.canConstruct(*args, **kwargs)


for case in testcases.all:
    ret = problem(*case[1:])
    assert (
        ret == case[0]
    ), f"\033[1;31mfailed test, expected `{case[0]}`, got `{ret}`, case: {case}\033[0;0m"

print("\033[0;32mAll tests cases passed.\033[0;0m")
