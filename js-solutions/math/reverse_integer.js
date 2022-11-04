// 7. Reverse Integer
// Medium

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321

// Example 2:

// Input: x = -123
// Output: -321

// Example 3:

// Input: x = 120
// Output: 21

 

// Constraints:

//     -231 <= x <= 231 - 1

const reverse = x => {
  let val = Math.abs(x);
  let res = 0;
  while (val !== 0){
    const last = val % 10;
    val = Math.floor(val / 10);
    res = res * 10 + last;
  };
  if (res > 2**31 - 1) return 0;
  return x < 0 ? -res : res;
};

//with string manipulation
const reverse2 = x => {
  const val = Math.abs(x);
  const rev = parseInt([...String(val)].reverse().join(''));
  if (rev > 2**31 - 1) return 0;
  return x < 0 ? -rev : rev;
};