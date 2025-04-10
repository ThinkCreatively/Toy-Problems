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
