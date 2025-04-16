package medium

import "strconv"

func countGood(nums []int, k int) int64 {
	isSame := true
	var count int64 = 0
	for i := 1; i < len(nums); i++ {
		if nums[i] != nums[i-1] {
			isSame = false
			break
		}
	}

	if isSame && len(nums) == k/2 {
		count++
		return count
	}

	var countMap = make(map[string]int)

	for _, v := range nums {
		strV := strconv.Itoa(v)
		if _, ok := countMap[strV]; ok {
			countMap[strV]++
			if countMap[strV]%2 == 0 {
				count++
			}
		} else {
			countMap[strV] = 1
		}
	}

	pairCount := 0

	for _, v := range countMap {
		if v == 2 {
			pairCount++
		}
		if pairCount >= k {
			count++
			break
		}
	}

	return count
}
