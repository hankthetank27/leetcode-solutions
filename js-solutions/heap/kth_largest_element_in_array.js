// 215. Kth Largest Element in an Array
// Medium
// 12.7K
// 640
// company
// Facebook
// company
// Amazon
// company
// Spotify

// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// You must solve it in O(n) time complexity.

//  

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

//  

// Constraints:

//     1 <= k <= nums.length <= 105
//     -104 <= nums[i] <= 104

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// using quick select
var findKthLargest = function(nums, k) {
  let l = 0
  let r = nums.length - 1
  const targetIdx = nums.length - k
  while (l <= r){
    const pi = partition(nums, l, r)
    if (pi === targetIdx) return nums[pi]
    pi < targetIdx 
      ? l = pi + 1
      : r = pi - 1
  }
};

const partition = (array, low, high) => {
  const pivot = high
  let partition = low - 1
  for (let i = low; i <= high - 1; i++){
    if (array[i] <= array[pivot]){
      partition++
      swap(array, i, partition)
    }
  }
  swap(array, partition + 1, pivot)
  return partition + 1
}

const swap = (array, i, j) => {
  [ array[i], array[j] ] = [ array[j], array[i] ]
}

//using heap
const Heap = require('./heap')

var findKthLargest2 = function(nums, k) {
  const heap = new Heap(nums)
  while (k > 1){
      heap.heapPop()
      k--
  }
  return heap.heap[0]
};