from typing import List
# PROMPT:
# Given an integer array nums, return true if any value appears at least twice in the array,
# and return false if every element is distinct.

def containsDuplicate(nums: List[int]) -> bool:
    return len(set(nums)) != len(nums)

print('Result of contains duplicates with [1,2,3,1], should return True: ', containsDuplicate([1,2,3,1]))
print('Result of contains duplicates with [1,2,3,4], should return False: ', containsDuplicate([1,2,3,4]))
print('Result of contains duplicates with [1,1,1,3,3,4,3,2,4,2], should return True: ', containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
