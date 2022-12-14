// 989. Add to Array-Form of Integer
// Easy


// The array-form of an integer num is an array representing its digits in left to right order.

//     For example, for num = 1321, the array form is [1,3,2,1].

// Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

//  

// Example 1:

// Input: num = [1,2,0,0], k = 34
// Output: [1,2,3,4]
// Explanation: 1200 + 34 = 1234

// Example 2:

// Input: num = [2,7,4], k = 181
// Output: [4,5,5]
// Explanation: 274 + 181 = 455

// Example 3:

// Input: num = [2,1,5], k = 806
// Output: [1,0,2,1]
// Explanation: 215 + 806 = 1021

//  

// Constraints:

//     1 <= num.length <= 104
//     0 <= num[i] <= 9
//     num does not contain any leading zeros except for the zero itself.
//     1 <= k <= 104

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let carry = 0
    const kStr = String(k)
    const res = new Array(Math.max(num.length, kStr.length))
    for (let i = 0; i < res.length; i++){
        const kIdx = kStr.length - i - 1
        const numIdx = num.length - i - 1
        const resIdx = res.length - i - 1

        const sum = Number(kStr[kIdx] || 0) + Number(num[numIdx] || 0) + carry

        if (sum >= 10){
            res[resIdx] = sum - 10
            carry = 1
        } else {
            res[resIdx] = sum
            carry = 0
        }
    }
    return carry ? [carry, ...res] : res
};


var addToArrayForm2 = function(num, k) {
  num.reverse()
  for (const [i, n] of num.entries()){
      num[i] = (n + k) % 10
      k = Math.floor((n + k) / 10)
  }
  while (k > 0){
      num.push(k % 10)
      k = Math.floor(k / 10)
  }
  return num.reverse()
};