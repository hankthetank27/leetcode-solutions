/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

*/


function isPalindrome(s: string): boolean {
  const key = new Set(
    ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r',
    's','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0']
  );
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    while (i < j && !key.has(s[i].toLowerCase())) i++;
    while (i < j && !key.has(s[j].toLowerCase())) j--;
    if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
    i++;
    j--;
  };
  return true;
};


console.log(isPalindrome("A man, a plan, a canal: Panama"))