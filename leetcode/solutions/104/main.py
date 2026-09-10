#!/usr/bin/env python3

from typing import Optional
from pylib.treenode import TreeNode, print_tree_flat
from .testcases import all as testcases


class Solution:
    def _depth_walk(self, node: Optional[TreeNode]) -> int:
        if node is None:
            return 0

        return 1 + max(self._depth_walk(node.left), self._depth_walk(node.right))

    def maxDepth(self, root: Optional[TreeNode]) -> int:
        return self._depth_walk(root)


def problem(*args, **kwargs):
    solution = Solution()
    return solution.maxDepth(*args, **kwargs)


for case in testcases:
    ret = problem(*case[1:])
    assert (
        ret == case[0]
    ), f"\033[1;31mfailed test, expected `{case[0]}`, got `{ret}`, case: {case}\033[0;0m"

print("\033[0;32mAll tests cases passed.\033[0;0m")
