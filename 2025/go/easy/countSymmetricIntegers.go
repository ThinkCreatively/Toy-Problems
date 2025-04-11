package easy

import (
	"fmt"
	"strconv"
)

func countSymmetricIntegers(low int, high int) int {
	count := 0
	for i := low; i <= high; i++ {
		stringified := strconv.Itoa(i)
		length := len(stringified)
		if length%2 != 0 {
			continue
		}
		part1 := stringified[0 : length/2]
		part2 := stringified[length/2:]

		if part1 == part2 {
			count++
			continue
		}

		part1Num, err := strconv.Atoi(part1)

		if err != nil {
			fmt.Println("err: ", err)
			return -1
		}

		part2Num, err2 := strconv.Atoi(part2)

		if err2 != nil {
			fmt.Println("err2: ", err2)
			return -1
		}

		if sumDigits(part1Num) == sumDigits(part2Num) {
			count++
		}
	}

	return count
}

func sumDigits(n int) int {
	sum := 0
	for n > 0 {
		digit := n % 10
		sum += digit
		n /= 10
	}
	return sum
}
