package medium

func numRabbits(answers []int) int {
	result := 0
	var freq = make(map[int]int)

	for _, answer := range answers {
		if answer == 0 {
			result++
			continue
		}
		if freq[answer] == 0 {
			result += answer + 1
		}
		freq[answer]++
		if freq[answer] == answer+1 {
			freq[answer] = 0
		}
	}

	return result
}
