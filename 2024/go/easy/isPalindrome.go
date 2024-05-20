package main

import "strings"

//lint:ignore U1000 Ignore unused function
func isPalindrome(s string) bool {
	if len(s) == 1 {
		return true
	}

	formatted := strings.ReplaceAll(strings.ToLower(strip(s)), " ", "")

	p2 := len(formatted) - 1

	for i := 0; i < len(formatted); i++ {
		if p2 < i {
			break
		}

		if formatted[i] != formatted[p2] {
			return false
		}

		p2--
	}

	return true
}

func strip(s string) string {
	var result strings.Builder
	for i := 0; i < len(s); i++ {
		b := s[i]
		if ('a' <= b && b <= 'z') ||
			('A' <= b && b <= 'Z') ||
			('0' <= b && b <= '9') ||
			b == ' ' {
			result.WriteByte(b)
		}
	}
	return result.String()
}
