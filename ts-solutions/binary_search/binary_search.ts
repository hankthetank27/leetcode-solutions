/*
  Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

  You must write an algorithm with O(log n) runtime complexity.

  

  Example 1:

  Input: nums = [-1,0,3,5,9,12], target = 9
  Output: 4
  Explanation: 9 exists in nums and its index is 4

  Example 2:

  Input: nums = [-1,0,3,5,9,12], target = 2
  Output: -1
  Explanation: 2 does not exist in nums so return -1
*/

function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  while(left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (target === nums[mid]) return mid;
    if (target > nums[mid]) left = mid + 1;
    if (target < nums[mid]) right = mid - 1;
  }
  return -1;
};



// recusive solution

// function search(nums: number[], target: number): number {
//   function recurse(start: number, end: number): number { 
//     if (end < start) return -1;  
//     const mid = start + Math.floor((end - start) / 2);   
//     if (nums[mid] === target) return mid;
//     if (nums[mid] > target) return recurse(start, mid - 1);
//     if (nums[mid] < target) return recurse(mid + 1, end);
//   }
//   return recurse(0, nums.length - 1);
// };


export {};


