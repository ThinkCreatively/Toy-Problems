/*
Given a string s and a dictionary of strings wordDict,
return true if s can be segmented into a space-separated sequence of one or more dictionary words.

NOTE: that the same word in the dictionary may be reused multiple times in the segmentation.
*/

const wordBreak = function(s, wordDict) {
  // iterate through s
  for (let i = 0; i < s.length; i++) {

  }
};


console.log(wordBreak("leetcode", ["leet","code"])); // return true
conosle.log(wordBreak("applepenapple", ["apple","pen"])); // returns true
console.log(wordBreak("catsandog", ["cats","dog","sand","and","cat"])); // return false