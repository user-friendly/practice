# -*- coding: UTF-8 -*-

def solve(nums: list[int]) -> int:
    # Brute force.
    for i in range(len(nums)):
        left = sum(nums[0:max(0,i)])
        right = sum(nums[i+1:])
        if left == right:
            return i
    
    return -1
