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


const quickSortInPlace = (array) => {

  const swap = (i, j) => {
    [array[i], array[j]] = [array[j], array[i]]
  }

  const partition = (l, r) => {
    const pivot = r
    let partionIdx = l - 1
    for (let i = l; i <= r - 1; i++){
      if (array[i] <= array[pivot]){
        partionIdx++
        swap(partionIdx, i)
      }
    }
    swap(partionIdx + 1, pivot)
    return partionIdx + 1
  }

  const qs = (l, r) => {
    if (l >= r) return
    const partionIdx = partition(l, r)
    qs(l, partionIdx - 1)
    qs(partionIdx + 1, r)
  }

  qs(0, array.length - 1)
  return array
}


console.log(quickSortInPlace([1, 4, 2, 9, 8, 5, 10, 14]))