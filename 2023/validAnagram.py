# PROMPT:
# Given two strings s and t, return true if t is an anagram of s, and false otherwise.
# NOTE: An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

def isAnagram(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False

    sDict = {}

    for char in s:
        if char in sDict:
            sDict[char] += 1
        else:
            sDict[char] = 1

    for char in t:
        if char in sDict:
            sDict[char] -= 1

    return all(value == 0 for value in sDict.values())


print('Result of isAnagram with truthy case: ', isAnagram("anagram", "nagaram"))
print('Result of isAnagram with falsy case: ', isAnagram("rat", "car"))
print('Result of isAnagram with falsy case: ', isAnagram("aacc", "ccac"))
