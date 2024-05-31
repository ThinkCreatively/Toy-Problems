package medium

//lint:ignore U1000 Ignore unused function
func singleNumber(nums []int) []int {
	if len(nums) == 2 {
		return nums
	}

	count := make(map[int]int)
	var result []int

	for _, v := range nums {
		if count[v] == 0 {
			count[v] = 1
		} else {
			count[v]++
		}
	}

	for i, v := range count {
		if v == 1 {
			result = append(result, i)
		}
	}

	return result
}
