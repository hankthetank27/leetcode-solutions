/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false
*/

function isValid(s: string): boolean {
  const map: Record<string, string> = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
  }
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++){
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    } else {
      if (s[i] !== map[stack.pop()]) return false;
    }
  }
  return !stack.length
};

