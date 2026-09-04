#!/usr/bin/env python3
# -*- coding: utf8 -*-

# This works!!! No need for crazy s**t.
# from ...pylib import helper

# from typing import List

import testcases

class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        j = 0
        for c in s:
          while j < len(t):
            if c == t[j]:
               j += 1
               break
            else:
               j += 1
          else:
            return False
        return True


def problem(*args, **kwargs):
    solution = Solution()
    return solution.isSubsequence(*args, **kwargs)

for case in testcases.all:
  ret = problem(*case[1:])
  assert ret == case[0], f"failed test, expected `{case[0]}`, got `{ret}`, case: {case}"
