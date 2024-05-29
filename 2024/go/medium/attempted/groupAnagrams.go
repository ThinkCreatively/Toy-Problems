package attempted

import "slices"

//lint:ignore U1000 Ignore unused function
func groupAnagrams(strs []string) [][]string {
	var groups [][]string

	for i := 0; i < len(strs); i++ {
		firstLen := len(strs[i])
		var runes []rune

		for _, v := range strs[i] {
			runes = append(runes, v)
		}

		var group []string

		for j := i + 1; j < len(strs); j++ {
			secondLen := len(strs[j])

			if firstLen != secondLen {
				continue
			}

			broke := false

			for _, v := range strs[j] {
				if !slices.Contains(runes, v) {
					broke = true
					break
				}
			}

			if !broke {
				group = append(group, strs[i])
			}

		}

		groups = append(groups, group)
	}

	return groups
}
