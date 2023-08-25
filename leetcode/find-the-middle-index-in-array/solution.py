# -*- coding: UTF-8 -*-

def bruteForce(nums: list[int]):
    for i in range(len(nums)):
        left = sum(nums[0:max(0,i)])
        right = sum(nums[i+1:])
        if left == right:
            return i
    
    return -1

def linearVerbose(nums: list[int]):
    if len(nums) == 1:
        return 0
    
    left = [0] * len(nums)
    right = [0] * len(nums)
    
    left[1] = nums[1]

    for i in range(1, len(nums)):
        left[i] = left[i-1] + nums[i-1]
    
    for i in reversed(range(0, len(nums)-1)):    
        right[i] = nums[i+1] + right[i+1]
    
    for i in range(len(nums)):
        if left[i] == right[i]:
            return i
    
    return -1

def solve(nums: list[int]) -> int:
    return linearVerbose(nums)
