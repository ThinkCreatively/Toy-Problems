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
