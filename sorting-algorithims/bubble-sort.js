/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums) {
  let swapped = true;
  let dif = 0;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < nums.length - dif; i++){
      if (nums[i] > nums[i + 1]){
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
        swapped = true;
      };
    };
    dif++;
  };
  return nums;
};