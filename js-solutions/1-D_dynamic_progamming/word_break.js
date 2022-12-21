// 139. Word Break
// Medium
// 13K
// 548
// company
// Amazon
// company
// Bloomberg
// company
// Facebook

// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

//  

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.

// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false

//  

// Constraints:

//     1 <= s.length <= 300
//     1 <= wordDict.length <= 1000
//     1 <= wordDict[i].length <= 20
//     s and wordDict[i] consist of only lowercase English letters.
//     All the strings of wordDict are unique.

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const backtrack = (s, idx, wordDict, memo) => {
      if (idx === s.length) return true
      if (memo.has(idx)) return memo.get(idx) 
      for (let i = idx + 1; i <= s.length; i++){
          const subStr = s.slice(idx, i)
          if (wordDict.has(subStr) && backtrack(s, i, wordDict, memo)){       
              memo.set(idx, true)
              return true
          } 
      }
      memo.set(idx, false)
      return false
  }
  return backtrack(s, 0, new Set(wordDict), new Map())
}