/*
  Insertion sort!
  
  Be sure to call your function insertionSort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
  Like bubble sort, there's a visualization mechanism available to you. Just call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!
  
  And you put xdescribe instead of describe if you want to suspend running the unit tests.  
*/

function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++){
    let swap = i;
    while (nums[swap] < nums[swap - 1] && swap !== 0){
      [nums[swap - 1], nums[swap]] = [nums[swap], nums[swap - 1]];
      swap--;
    };
  };
  return nums;
};