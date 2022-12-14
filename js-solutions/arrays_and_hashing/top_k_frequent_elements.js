// 347. Top K Frequent Elements
// Medium

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

//  

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

//  

// Constraints:

//     1 <= nums.length <= 105
//     -104 <= nums[i] <= 104
//     k is in the range [1, the number of unique elements in the array].
//     It is guaranteed that the answer is unique.

//  

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */


var topKFrequent = function(nums, k) {
  const counts = {}
  const buckets = new Array(nums.length).fill(null).map(e => [])
  const res = []

  for (const num of nums) counts[num] = 1 + (counts[num] || 0)
  for (const count in counts) buckets[counts[count] - 1].push(count)

  let i = buckets.length - 1
  while (res.length < k){
      for (const item of buckets[i]){
          if (res.length < k) res.push(item)
          else break
      }
      i--
  }
  return res
}

// var topKFrequent = function(nums, k) {
//   const counts = nums.reduce((acc, num) => {
//       acc[num] = 1 + (acc[num] || 0)
//       return acc
//   }, {}) 
//   const sorted = [...Object.values(counts)].sort((a, b) => b - a).slice(0, k)
//   return sorted.map(count => find(counts, count))
// };

// const find = (counts, count) => {
//     for(const el of Object.keys(counts)){
//         if (counts[el] === count){
//             delete counts[el]
//             return el
//         } 
//     }
// }
