package hard

import (
	"fmt"
	"strconv"
)

func goodTriplets(nums1 []int, nums2 []int) int64 {
	var nums1Map = make(map[string]int)
	var nums2Map = make(map[string]int)

	for i := 0; i < len(nums1); i++ {
		nums1Map[strconv.Itoa(nums1[i])] = i
		nums2Map[strconv.Itoa(nums2[i])] = i
	}

	var nums1GoodTrips [][]int
	var nums2GoodTrips [][]int

	for i, v := range nums1Map {
		fmt.Println(i)
		fmt.Println(v)
	}

	fmt.Println(nums1GoodTrips, nums2GoodTrips)
	fmt.Println(nums1Map, nums2Map)

	return 0
}

// Chats answer
func chatGoodTriplets(nums1 []int, nums2 []int) int {
	n := len(nums1)

	// Step 1: Build position map for nums2
	pos2 := make([]int, n)
	for i, val := range nums2 {
		pos2[val] = i
	}

	// Step 2: Transform nums1 into array of nums2 positions
	transformed := make([]int, n)
	for i, val := range nums1 {
		transformed[i] = pos2[val]
	}

	// Step 3: Count increasing triplets using prefix sums
	// left[i] = how many numbers before i are smaller than transformed[i]
	// right[i] = how many numbers after i are greater than transformed[i]

	leftCount := make([]int, n)
	rightCount := make([]int, n)

	// BIT for counting smaller elements before current
	leftBIT := make([]int, n+2)
	for i := 0; i < n; i++ {
		val := transformed[i]
		leftCount[i] = queryBIT(leftBIT, val)
		updateBIT(leftBIT, val+1, 1)
	}

	// BIT for counting larger elements after current
	rightBIT := make([]int, n+2)
	for i := n - 1; i >= 0; i-- {
		val := transformed[i]
		rightCount[i] = queryBIT(rightBIT, n-1) - queryBIT(rightBIT, val)
		updateBIT(rightBIT, val+1, 1)
	}

	// Step 4: Total good triplets = sum of left[i] * right[i]
	ans := 0
	for i := 0; i < n; i++ {
		ans += leftCount[i] * rightCount[i]
	}

	return ans
}

// Binary Indexed Tree (Fenwick Tree) helpers
func updateBIT(bit []int, index int, delta int) {
	for index < len(bit) {
		bit[index] += delta
		index += index & -index
	}
}

func queryBIT(bit []int, index int) int {
	sum := 0
	for index > 0 {
		sum += bit[index]
		index -= index & -index
	}
	return sum
}
