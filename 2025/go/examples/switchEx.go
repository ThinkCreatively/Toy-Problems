package examples

// ParseCard returns the integer value of a card following blackjack ruleset.
func ParseCard(card string) int {
	switch card {
	case "ace":
		return 11
	case "two":
		return 2
	case "three":
		return 3
	case "four":
		return 4
	case "five":
		return 5
	case "six":
		return 6
	case "seven":
		return 7
	case "eight":
		return 8
	case "nine":
		return 9
	case "joker":
		return 0
	default:
		return 10
	}
}

// FirstTurn returns the decision for the first turn, given two cards of the
// player and one card of the dealer.
func FirstTurn(card1, card2, dealerCard string) string {
	cardSum := ParseCard(card1) + ParseCard(card2)
	dealerSum := ParseCard(dealerCard)
	if cardSum == 22 {
		return "P"
	}

	if cardSum == 21 {
		switch dealerSum {
		case 10:
			return "S"
		case 11:
			return "S"
		default:
			return "W"
		}
	}

	if cardSum >= 17 && cardSum <= 20 {
		return "S"
	}

	if cardSum >= 12 && cardSum <= 16 {
		if dealerSum < 7 {
			return "S"
		} else {
			return "H"
		}
	}

	return "H"
}
