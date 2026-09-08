#!/usr/bin/env python3
# -*- coding: utf8 -*-

# 169. Majority Element
# https://leetcode.com/problems/majority-element/

from typing import List

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        min = len(nums) // 2
        # Num has to be > min (NOT >=)

        # This right here is O(N) time/mem.
        map = {}
        for n in nums:
            map[n] = map.get(n, 0) + 1
            if map[n] > min:
                return n

        # # O(1) space
        # candidate, count = None, 0
        # for n in nums:
        #     if count == 0:
        #       candidate = n
        #     count += 1 if n == candidate else -1
        
        # return candidate
        
        return 0
