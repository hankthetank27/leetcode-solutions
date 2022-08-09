/*
Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

    Integers in each row are sorted from left to right.
    The first integer of each row is greater than the last integer of the previous row.

 

Example 1:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Example 2:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

*/

function searchMatrix(matrix: number[][], target: number): boolean {
  let left = 0;
  let right = matrix.length - 1;
  while(left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (target > matrix[mid][matrix[0].length - 1]) {
       left = mid + 1;
    }
    else if (target < matrix[mid][0]) {
      right = mid - 1;
    } 
    else {
      return searchArray(matrix[mid], target);
    } 
  }
  return false;
};

function searchArray(array: number[], target: number) {
  let left = 0;
  let right = array.length - 1;
  while(left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (target === array[mid]) return true;
    if (target > array[mid]) left = mid + 1;
    if (target < array[mid]) right = mid - 1;
  }
  return false;
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)) //true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)) //false