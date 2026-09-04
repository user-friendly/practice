#!/usr/bin/env python3
# -*- coding: utf8 -*-

# 121. Best Time to Buy and Sell Stock
# https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # # Totally fails large test, probably because O(N^2)
        # for i, v in enumerate(prices):
        #   for n in prices[i+1:]:
        #      if n > v and n - v > p:
        #         p = n - v

        # l = prices[0]
        # for i, v in enumerate(prices):
        #   if v > l:
        #     continue
        #   l = v
        #   for n in prices[i+1:]:
        #      if n > v and n - v > p:
        #         p = n - v

        p, m = 0, 0
        for i, v in enumerate(prices):
          # Check minimum.
          if prices[m] > v:
              m = i
              continue
          if v - prices[m] > p:
              p = v - prices[m]
        
        return p

testcases = ([7,1,5,3,6,4], 5), ([7,6,4,3,1], 0)

print()

sol = Solution()
for t in testcases:
    res = sol.maxProfit(t[0])
    if res != t[1]:
        print(f"Failed test case: {t}, expected: {t[1]}, got: {res}")
        break

print()
