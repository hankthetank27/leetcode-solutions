/*

  Quick Sort!
  
  Name your function quickSort.
  
  Quick sort should grab a pivot from the end and then separate the list (not including the pivot)
  into two lists, smaller than the pivot and larger than the pivot. Call quickSort on both of those
  lists independently. Once those two lists come back sorted, concatenate the "left" (or smaller numbers)
  list, the pivot, and the "right" (or larger numbers) list and return that. The base case is when quickSort
  is called on a list with length less-than-or-equal-to 1. In the base case, just return the array given.

*/

function quickSort(nums) {
  if (nums.length <= 1) return nums;
  
  const pivot = nums[nums.length - 1];
  const less = [], more = [];

  for (let i = 0; i < nums.length - 1; i++) {
    nums[i] < pivot ? less.push(nums[i]) : more.push(nums[i]);
  };

  return [...quickSort(less), pivot, ...quickSort(more)];
};