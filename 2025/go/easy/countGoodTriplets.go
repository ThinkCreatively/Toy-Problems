package easy

func countGoodTriplets(arr []int, a int, b int, c int) int {
	result := 0

	for i := 0; i < len(arr); i++ {
		for j := i + 1; j < len(arr); j++ {
			if AbsInt(arr[i]-arr[j]) > a {
				continue
			}
			for k := j + 1; k < len(arr); k++ {
				if AbsInt(arr[j]-arr[k]) > b {
					continue
				}

				if AbsInt(arr[i]-arr[k]) > c {
					continue
				}

				result++
			}
		}
	}

	return result
}

func AbsInt(x int) int {
	if x < 0 {
		return -x
	}
	return x
}
