package main

import (
	"reflect"
	"unicode"
)

//lint:ignore U1000 Ignore unused function
func isAnagram(s string, t string) bool {
	sRunes := map[rune]int{}
	tRunes := map[rune]int{}

	for _, v := range s {
		if unicode.IsSpace(v) {
			continue
		}
		sRunes[v] += 1
	}

	for _, v := range t {
		if unicode.IsSpace(v) {
			continue
		}
		tRunes[v] += 1
	}

	return reflect.DeepEqual(sRunes, tRunes)
}
