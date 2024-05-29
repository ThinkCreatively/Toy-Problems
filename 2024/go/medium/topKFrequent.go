package medium

import (
	"slices"
	"sort"
)

//lint:ignore U1000 Ignore unused function
func topKFrequent(nums []int, k int) []int {
	if len(nums) == 1 {
		return nums
	}

	slices.Sort(nums)

	count := make(map[int]int)

	for _, v := range nums {
		if count[v] != 0 {
			count[v]++
		} else {
			count[v] = 1
		}
	}

	values := make([]int, 0, len(count))

	for k := range count {
		values = append(values, k)
	}

	sort.SliceStable(values, func(i, j int) bool {
		return count[values[i]] < count[values[j]]
	})

	var result []int

	for i := len(values) - 1; i >= 0; i-- {
		if len(result) != k {
			result = append(result, values[i])
		}
	}

	return result
}
