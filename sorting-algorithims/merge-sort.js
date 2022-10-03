/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  if (nums.length === 1) return nums;
  const mid = Math.floor(nums.length / 2);
  return merge(mergeSort(nums.slice(0, mid)), mergeSort(nums.slice(mid)));
};

const merge = (left, right) => {
  const res = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while(leftIdx < left.length && rightIdx < right.length){
    if (left[leftIdx] < right[rightIdx]){
      res.push(left[leftIdx]);
      leftIdx++;
    };
    if (right[rightIdx] < left[leftIdx]){
      res.push(right[rightIdx]);
      rightIdx++;
    };
  };

  while (rightIdx < right.length){
    res.push(right[rightIdx]);
    rightIdx++;
  };

  while (leftIdx < left.length){
    res.push(left[leftIdx]);
    leftIdx++;
  };

  return res;
};