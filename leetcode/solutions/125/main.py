#!/usr/bin/env python3
# -*- coding: utf8 -*-

# This works!!! No need for crazy s**t.
# from ...pylib import helper

# from typing import List

import testcases

class Solution:
    def isPalindrome(self, s: str) -> bool:
      s = "".join(c.lower() for c in s if c.isalnum())
      for i in range(len(s)//2):
        if s[i] != s[-i-1]:
            return False
      return True


def problem(*args, **kwargs):
    solution = Solution()
    return solution.isPalindrome(*args, **kwargs)

for case in testcases.all:
  ret = problem(case[1])
  assert ret == case[0], f"failed test, expected `{case[0]}`, got `{ret}`, case: {case}"
