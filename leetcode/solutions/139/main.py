#!/usr/bin/env python3

# from pylib.listnode import ListNode
from .testcases import all as testcases


class Solution:
    _str: str
    _dict: list[str]
    # Memorize false ~k-tuples~ cases.
    # NOTE This is not optimal - can be a set.
    _mem: dict[int, dict[int, bool]]

    def rec(self, p):
        if p >= len(self._str):
            return True

        if p not in self._mem:
            self._mem[p] = {}

        for k, word in enumerate(self._dict):
            if k in self._mem[p]:
                continue

            # if self._str.startswith(word, p):
            if self._str[p : p + len(word)] == word:
                if self.rec(p + len(word)) is True:
                    return True
                else:
                    self._mem[p][k] = False

        return False

    def wordBreak(self, s: str, wordDict: list[str]) -> bool:

        self._mem = {}
        self._str = s
        self._dict = wordDict

        return self.rec(0)


def problem(*args, **kwargs):
    solution = Solution()
    return solution.wordBreak(*args, **kwargs)


for case in testcases:
    ret = problem(*case[1:])
    assert (
        ret == case[0]
    ), f"\033[1;31mfailed test, expected `{case[0]}`, got `{ret}`, case: {case}\033[0;0m"

print("\033[0;32mAll tests cases passed.\033[0;0m")
