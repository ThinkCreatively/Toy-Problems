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

// Chat, sliding window approach

func chatCountGood(nums []int, k int) int64 {
	freq := make(map[int]int)
	var count int64 = 0
	left := 0
	pairs := 0

	for right := 0; right < len(nums); right++ {
		// Add nums[right] to freq and update pairs
		pairs += freq[nums[right]]
		freq[nums[right]]++

		// While we have enough pairs, count subarrays
		for pairs >= k {
			count += int64(len(nums) - right)
			freq[nums[left]]--
			pairs -= freq[nums[left]]
			left++
		}
	}

	return count
}
