package easy

// Chat answer
func countValidSubarrays(nums []int) int {
	count := 0

	for i := 0; i <= len(nums)-3; i++ {
		a, b, c := nums[i], nums[i+1], nums[i+2]

		if 2*(a+c) == b {
			count++
		}
	}

	return count
}
