/*
567. Permutation in String
Medium

Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

 

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
*/

//O(n)
function checkInclusion(s1: string, s2: string): boolean {
  
  if (s1.length > s2.length) return false;
  
  const targetWord: Record<string, number> = {};
  
  for (let char of s1) {
    targetWord[char] = 1 + (targetWord[char] || 0); 
  };

  let leftPtr = 0;
  let reqLen = s1.length;
  
  for (let rightPtr = 0; rightPtr < s2.length; rightPtr++){
    
    const leftChar = s2[leftPtr];
    const rightChar = s2[rightPtr];
    
    //handle right
    if (targetWord[rightChar] > 0) reqLen--;
    targetWord[rightChar]--;
    
    //handle left
    if (rightPtr - leftPtr === s1.length) {
      if (targetWord[leftChar] >= 0) reqLen++;
      targetWord[leftChar]++;
      leftPtr++;
    };

    if (reqLen === 0) return true;
    
  };
  return false;
};


//O(26 * n);
// function checkInclusion(s1: string, s2: string): boolean {
  
//   const targetWord: Record<string, number> = {};
  
//   for (let char of s1) {
//     targetWord[char] = 1 + (targetWord[char] || 0); 
//   };
  
//   const currentWord: Record<string, number> = {};
//   let left = 0;
  
//   for (let right = 0; right < s2.length; right++){
//     currentWord[s2[right]] = 1 + (currentWord[s2[right]] || 0);
    
//     if (right - left >= s1.length) {
//       currentWord[s2[left]]--;
//       left++;
//     };  
    
//     if (match(targetWord, currentWord)) return true;
    
//   };
//   return false;
// };


// function match (targetWord: Record<string, number>, currentWord: Record<string, number>) {
//   let res = true;
//   for (let char in targetWord) {
//     if (currentWord[char] !== targetWord[char]) res = false;
//   };
//   return res
// };