/*
  You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

  Return the length of the longest substring containing the same letter you can get after performing the above operations.

  

  Example 1:

  Input: s = "ABAB", k = 2
  Output: 4
  Explanation: Replace the two 'A's with two 'B's or vice versa.

  Example 2:

  Input: s = "AABABBA", k = 1
  Output: 4
  Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
  The substring "BBBB" has the longest repeating letters, which is 4.
*/

function characterReplacement(s: string, k: number): number {
  let res = 0;
  let left = 0;
  const charFreq: Record<string, number> = {};

  for (let i = 0; i < s.length; i++) {

    charFreq[s[i]] = 1 + (charFreq[s[i]] || 0);

    while ((i - left + 1) - Math.max(...Object.values(charFreq)) > k){
      charFreq[s[left]]--;
      left++;
    }

    res = Math.max(res, i - left + 1);
  }
  return res;
};


// //optimized solution~~~
//   //slightly unintuitve check for maxFreq; it doesnt update when the max freq is actually lowered.
// function characterReplacement(s: string, k: number): number {
//   let res = 0;
//   let left = 0;
//   let maxFreq = 0;
//   const charFreq: Record<string, number> = {};

//   for (let i = 0; i < s.length; i++) {

//     charFreq[s[i]] = 1 + (charFreq[s[i]] || 0);
//     maxFreq = Math.max(maxFreq, charFreq[s[i]]);

//     while ((i - left + 1) - maxFreq > k){
//       charFreq[s[left]]--;
//       left++;
//     }

//     res = Math.max(res, i - left + 1);
//   }
//   return res;
// };


console.log(characterReplacement('ABAB', 2)) //4
console.log(characterReplacement('AABABBA', 2)) //4
console.log(characterReplacement('CDEAGBGZGGGGH', 2)) //8
console.log(characterReplacement('AAAA', 0))//4