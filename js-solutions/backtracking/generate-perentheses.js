// 22. Generate Parentheses
// Medium

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.



// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:

// Input: n = 1
// Output: ["()"]



// Constraints:

//     1 <= n <= 8

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {

  const backtrack = (open, closed, stack) => {
    if (open === n && closed === n) {
      res.push(stack.join(''));
      return;
    };

    if (open < n) {
      stack.push('(');
      backtrack(open + 1, closed, stack);
      stack.pop();
    };

    if (closed < open) {
      stack.push(')');
      backtrack(open, closed + 1, stack);
      stack.pop();
    };
  };

  const res = [];
  backtrack(0, 0, []);
  return res;
};