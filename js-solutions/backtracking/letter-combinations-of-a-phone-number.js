// 17. Letter Combinations of a Phone Number
// Medium
// 13.9K
// 808
// company
// Amazon
// company
// Microsoft
// company
// Facebook

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

 

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:

// Input: digits = ""
// Output: []

// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]

 

// Constraints:

//     0 <= digits.length <= 4
//     digits[i] is a digit in the range ['2', '9'].

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) return []

  const letterMap = {
      2: ['a','b','c'],
      3: ['d','e','f'],
      4: ['g','h','i'],
      5: ['j','k','l'],
      6: ['m','n','o'],
      7: ['p','q','r','s'],
      8: ['t','u','v'],
      9: ['w','x','y','z']
  }
  const res = []
  const backtrack = (comb, idx) => {

      if (comb.length === digits.length){
          res.push(comb.join(''))
          return
      }

      const currentLetters = letterMap[digits[idx]]
      for (let i = 0; i < currentLetters.length; i++){
          comb.push(currentLetters[i])
          backtrack(comb, idx + 1)
          comb.pop()
      }

  }
  backtrack([], 0)
  return res
};