# PROMPT:
# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
# NOTE You may assume that each input would have exactly one solution, and you may not use the same element twice.
# NOTE You can return the answer in any order.

def twoSum(nums: list[int], target: int) -> list[int]:
    if len(nums) == 2:
        return [0, 1]

    answer = []
    found = False
    p1 = 0
    for num in range(p1, len(nums)):
        if found == True:
            break
        for secNum in range(p1+1, len(nums)):
            if nums[num] + nums[secNum] == target:
                answer = [num, secNum]
                found = True
                break
        p1 += 1

    return answer


print('Result of twoSum, should return [0,1]: ', twoSum([2, 7, 11, 15], 9))
print('Result of twoSum, should return [1,2]: ', twoSum([3, 2, 4], 6))
print('Result of twoSum, should return [0,1]: ', twoSum([3, 3], 6))
print('Result of twoSum, should return [0,2]: ', twoSum([3, 2, 3], 6))
