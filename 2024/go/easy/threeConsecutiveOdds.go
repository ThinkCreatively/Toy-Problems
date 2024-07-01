package easy

//lint:ignore U1000 Ignore unused function
func threeConsecutiveOdds(arr []int) bool {
	count := 0

	for _, v := range arr {
		if count == 3 {
			return true
		}

		if v%2 != 0 {
			count++
		} else {
			count = 0
		}
	}

	return count == 3
}
