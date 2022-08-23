/*
Given a string s, find the length of the longest substring without repeating characters. 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/


//initalized a left side pointer to track window size
//loop string and store the last seen index of each charater (this step is done after checking the following step but is put here for clarity)
//if last seen charater is index is greater than or equal to current left of window,
  //the window contains the charater so move the left pointer to the location of the last seen pointer (+1)
//keep track of largest size of of windows, comparing max between highest, and current window.

// function lengthOfLongestSubstring(s: string): number {
//   let result = 0;
//   let left = 0;
//   const letterMap: Record<string, number> = {};
//   for (let i = 0; i < s.length; i++){
//     const lastSeenInd = letterMap[s[i]];
//     const inWindow = lastSeenInd >= left;
//     left = inWindow ? lastSeenInd + 1 : left;
//     letterMap[s[i]] = i;
//     result = Math.max(result, (i - left) + 1)
//   }
//   return result;
// };


//alternate, potentailly more clear sliding window solution
function lengthOfLongestSubstring(s: string): number{
  const charSet = new Set();
  let left = 0;
  let result = 0;
  for (let i = 0; i < s.length; i++){
    while (charSet.has(s[i])){
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[i]);
    result = Math.max(result, (i - left) + 1);
  }
  return result;
};


// //with object instead of set

// function lengthOfLongestSubstring(s: string): number{
//   const charSet: Record <string, boolean> = {};
//   let left = 0;
//   let result = 0;
//   for (let i = 0; i < s.length; i++){
//     while (charSet[s[i]]){
//       delete charSet[s[left]];
//       left++;
//     }
//     charSet[s[i]] = true;
//     result = Math.max(result, (i - left) + 1);
//   }
//   return result;
// };



console.log(lengthOfLongestSubstring('abcabcbb')) //3
console.log(lengthOfLongestSubstring('bbbbb')) //1
console.log(lengthOfLongestSubstring('pwwkew')) //3
console.log(lengthOfLongestSubstring('pwdwt')) //3
console.log(lengthOfLongestSubstring(' '))//1