package easy

// My WIP Solution
func countSubarrays(nums []int) int {
	if len(nums) == 3 && nums[0]+nums[2] != nums[1]/2 {
		return 0
	}

	subArrs := [][]int{}

	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			for k := j + 1; k < len(nums); k++ {
				candidate := []int{nums[i], nums[j], nums[k]}
				if nums[i]+nums[k] == nums[j]/2 && !contains(subArrs, candidate) {
					subArrs = append(subArrs, []int{nums[i], nums[j], nums[k]})
				}
			}
		}
	}

	return len(subArrs)
}

func contains(subArrs [][]int, candidate []int) bool {
	for _, arr := range subArrs {
		if len(arr) != len(candidate) {
			continue
		}
		matched := true
		for i := range arr {
			if arr[i] != candidate[i] {
				matched = false
				break
			}
		}
		if matched {
			return true
		}
	}
	return false
}

// Chats answer
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
