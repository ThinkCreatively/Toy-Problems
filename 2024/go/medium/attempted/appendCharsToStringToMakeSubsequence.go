package attempted

//lint:ignore U1000 Ignore unused function
func appendCharacters(s string, t string) int {
	sCount := make(map[rune]int)
	tCount := make(map[rune]int)

	for _, v := range s {
		sCount[v]++
	}

	for _, v := range t {
		tCount[v]++
	}

	// testStr := []string{t[0]}
	// firstPart := ""

	// for i := 0; i < len(t); i++ {
	// 	if strings.Contains(s, make([]string, testStr)) {
	// 		firstPart += string(testStr)
	// 		testStr = append(testStr, t[i+1])
	// 	}
	// }

	// toAdd := ""

	// for i, _ := range tCount {
	// 	if sCount[i] == 0 {
	// 		toAdd += string(i)
	// 	}
	// }

	// fmt.Println(toAdd)

	return 0
}
