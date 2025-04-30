package easy

import "strconv"

func findNumbers(nums []int) int {
	count := 0

	for i := 0; i < len(nums); i++ {
		if len(strconv.Itoa(nums[i]))%2 == 0 {
			count++
		}
	}

	return count
}
