package easy

//lint:ignore U1000 Ignore unused function
func twoSum(nums []int, target int) []int {
	for i, iv := range nums {
		for j, jv := range nums[i+1:] {
			if iv+jv == target {
				return []int{i, i + j + 1}
			}
		}
	}

	return []int{0, 0}
}

// func twoSum(nums []int, target int) []int {
// 	for i := 0; i < len(nums); i++ {
// 		for j := i + 1; j < len(nums); j++ {
// 			if nums[i]+nums[j] == target {
// 				return []int{i, j}
// 			}
// 		}
// 	}

// 	return []int{0, 0}
// }
