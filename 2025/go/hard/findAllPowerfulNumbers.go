package hard

import (
	"strconv"
	"strings"
)

func numberOfPowerfulInt(start int64, finish int64, limit int, s string) int64 {
	count := int64(0)
	numVal, _ := strconv.Atoi(s)

	if int64(numVal) > finish {
		return 0
	}

	for i := start; i <= finish; i++ {
		numString := strconv.FormatInt(i, 10)
		if numString == s {
			count = addToCount(numString, count, limit)
		}

		if len(numString) > len(s) && strings.Contains(numString[1:], s) {
			count = addToCount(numString, count, limit)
		}
	}

	return count
}

func addToCount(numString string, count int64, limit int) int64 {
	isValid := true
	for j := 0; j < len(numString); j++ {
		digit, _ := strconv.Atoi(string(numString[j]))
		if digit > limit {
			isValid = false
			break
		}
	}
	if isValid {
		return count + 1
	}
	return count
}

// Claude's answer:
func countOfPowerfulInt(start int64, finish int64, limit int, s string) int64 {
	suffixLen := len(s)

	// If s doesn't fit within our range
	if len(strconv.FormatInt(finish, 10)) < suffixLen {
		return 0
	}

	// Check if s contains digits larger than limit
	for i := 0; i < suffixLen; i++ {
		if int(s[i]-'0') > limit {
			return 0
		}
	}

	// Calculate min value with our suffix
	minWithSuffix := int64(0)
	if suffixLen > 0 {
		minWithSuffix, _ = strconv.ParseInt(s, 10, 64)
	}

	// Count numbers with the suffix and digits <= limit
	return countValid(start, finish, limit, s, minWithSuffix)
}

func countValid(start, finish int64, limit int, s string, minWithSuffix int64) int64 {
	count := int64(0)
	suffixLen := len(s)

	// For each number in range, check if it's powerful
	for num := determineMax(start, minWithSuffix); num <= finish; num++ {
		numStr := strconv.FormatInt(num, 10)

		// Check if ends with suffix
		if len(numStr) >= suffixLen && numStr[len(numStr)-suffixLen:] == s {
			isValid := true

			// Check if all digits <= limit
			for i := 0; i < len(numStr); i++ {
				if int(numStr[i]-'0') > limit {
					isValid = false
					break
				}
			}

			if isValid {
				count++
			}
		}
	}

	return count
}

func determineMax(a, b int64) int64 {
	if a > b {
		return a
	}
	return b
}
