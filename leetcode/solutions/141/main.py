#!/usr/bin/env python3

from typing import Optional
from pylib.listnode import ListNode
from .testcases import all as testcases


class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        if head is None:
            return False

        # O(1) runtime, but O(N) memory wise.
        # while head.next is not None:
        #     if hasattr(head, "visited") and head.visited is not None:
        #         return True
        #     head.visited = True
        #     head = head.next

        i = 0
        foo = head
        while head.next is not None:
            head = head.next
            i += 1
            if i % 2 == 0:
                foo = foo.next
            if foo is head:
                return True

        return False


def problem(*args, **kwargs):
    solution = Solution()
    return solution.hasCycle(*args, **kwargs)


for case in testcases:
    ret = problem(*case[1:])
    assert (
        ret == case[0]
    ), f"\033[1;31mfailed test, expected `{case[0]}`, got `{ret}`, case: {case}\033[0;0m"

print("\033[0;32mAll tests cases passed.\033[0;0m")
