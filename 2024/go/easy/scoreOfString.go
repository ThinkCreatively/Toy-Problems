package easy

import "math"

//lint:ignore U1000 Ignore unused function
func scoreOfString(s string) int {
	score := 0

	for i := 0; i < len(s); i++ {
		if i == len(s)-2 {
			score += int(math.Abs(float64(s[i]-'0') - float64(s[i+1]-'0')))
			break
		}
		score += int(math.Abs(float64(s[i]-'0') - float64(s[i+1]-'0')))
	}

	return score
}
