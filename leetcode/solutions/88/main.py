#!/usr/bin/env python3

from typing import List

# from ...pylib import helper

import testcases

class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        # Deal with the two edge cases. Should save time.

        if n <= 0:
            for k, v in enumerate(nums1):
                nums1[k] = v if k < m else 0
            return None
        elif m <= 0:
            for k, v in enumerate(nums2):
                nums1[k] = nums2[k] if k < n else 0
            return None

        MIN = int(-1.1e9)
        j = m - 1
        k = n - 1
        i = m + n - 1

        # # Less then ideal solution.
        # tmp_list = [MIN] * (m + n)
        # while i >= 0:
        #     if j >= 0 and k >= 0:
        #         if nums1[j] > nums2[k]:
        #             tmp_list[i] = nums1[j]
        #             j -= 1
        #         elif nums2[k] > nums1[j]:
        #             tmp_list[i] = nums2[k]
        #             k -= 1
        #         elif nums2[k] == nums1[j]:
        #             tmp_list[i] = nums2[k]
        #             k -= 1
        #     elif j >= 0:
        #         tmp_list[i] = nums1[j]
        #         j -= 1
        #     elif k >= 0:
        #         tmp_list[i] = nums2[k]
        #         k -= 1
            
        #     i -= 1
        #     pass

        while i >= 0:
            if j >= 0 and k >= 0:
                if nums1[j] > nums2[k]:
                    nums1[i] = nums1[j]
                    nums1[j] = MIN
                    j -= 1
                elif nums2[k] > nums1[j]:
                    nums1[i] = nums2[k]
                    k -= 1
                elif nums2[k] == nums1[j]:
                    nums1[i] = nums2[k]
                    k -= 1
            elif j >= 0:
                nums1[i] = nums1[j]
                j -= 1
                pass
            elif k >= 0:
                nums1[i] = nums2[k]
                k -= 1
                pass

            i -= 1
            pass

        return None

def problem(*args, **kwargs):
    solution = Solution()
    return solution.merge(*args, **kwargs)

for case in testcases.all:
  problem(*case[1:])
  # Problem modifies arg 1.
  ret = case[1]
  for k, v in enumerate(case[0]):
      assert ret[k] == v, f"\033[1;31mfailed test, expected `{v}`, got `{ret[k]}`, case: {case}\033[0;0m"

print("\033[0;32mAll tests cases passed.\033[0;0m")
