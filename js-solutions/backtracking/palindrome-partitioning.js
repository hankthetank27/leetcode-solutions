// 131. Palindrome Partitioning
// Medium
// 9K
// 282
// company
// Bloomberg
// company
// Amazon
// company
// Adobe

// Given a string s, partition s such that every
// substring
// of the partition is a
// palindrome
// . Return all possible palindrome partitioning of s.

//  

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]

// Example 2:

// Input: s = "a"
// Output: [["a"]]

//  

// Constraints:

//     1 <= s.length <= 16
//     s contains only lowercase English letters.

// Accepted
// 552K
// Submissions
// 878.9K
// Acceptance Rate
// 62.8%

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const backtrack = (i, subset) => {
      if (i >= s.length){
          res.push([...subset])
          return
      } 

      for (let j = i; j < s.length; j++){
          const subStr = s.slice(i, j + 1)
          if (isPalindrome(subStr)){
              subset.push(subStr)
              backtrack(j + 1, subset)
              subset.pop()
          }
      }
  }
  const res = []
  backtrack(0, [])
  return res
};

const isPalindrome = (s) => {
  let l = 0, r = s.length - 1
  while (l < r){
      if (s[l] !== s[r]) return false
      l++
      r--
  }
  return true
}