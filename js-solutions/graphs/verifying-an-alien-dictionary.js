// 953. Verifying an Alien Dictionary
// Easy

// In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

 

// Example 1:

// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.

// Example 2:

// Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
// Output: false
// Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.

// Example 3:

// Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
// Output: false
// Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).


/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
 var isAlienSorted = function(words, order) {
  const orderMap = {};
  for (let i = 0; i < order.length; i++){
      orderMap[order[i]] = i;
  };
  
  let prevWord = words[0];
  for (const currWord of words) {
      if (!validateOrder(currWord, prevWord, orderMap)) return false;
      prevWord = currWord;
  };
  return true;
};

const validateOrder = (currWord, prevWord, orderMap) => {
  if (currWord === prevWord) return true;
  
  let i = 0;
  while (currWord[i] == prevWord[i]){
      i++;
      if (i >= currWord.length) return false;
  };
  
  if (orderMap[currWord[i]] < orderMap[prevWord[i]]) return false;
  
  return true;
};