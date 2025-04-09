package easy

import "sort"

func minOperations(nums []int, k int) int {
	sort.Ints(nums)
	if nums[0] < k {
		return -1
	}
	operations := 0
	if nums[0] > k {
		operations++
	}
	for i, _ := range nums {
		if i+1 < len(nums) {
			if nums[i] < nums[i+1] {
				operations++
			}
		}
	}

	return operations
}
