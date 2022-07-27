/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
*/


//two pointers

function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++){
    if (nums[i] > 0) break;
    if (nums[i - 1] === nums[i]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right){
      const sum = nums[left] + nums[right] + nums[i];
      if (sum === 0){
        result.push([nums[left], nums[right], nums[i]]);
        left++;
        while (nums[left] === nums[left - 1]) left++; 
      }
      else if (sum < 0) left++;
      else if (sum > 0) right--;
    }
  }
  return result;
};



// hash map

// function threeSum(nums: number[]): number[][] {
//   const result: number[][] = [];
//   nums.sort((a, b) => a - b);

//   for (let i = 0; i < nums.length; i++){

//     const map: Record<string, number> = {};

//     if (i === 0 || nums[i-1] !== nums[i]){

//       for (let j = i + 1; j < nums.length; j++){
//         const target = 0 - nums[i] - nums[j];

//         if (map[target]){
//           result.push([nums[i], nums[j], target]);
//           while (nums[j] === nums[j+1]) j++;
//         }
        
//         map[nums[j]] = j;
//       }
//     }

//   }
//   return result;
// };



console.log(threeSum([-1,0,1,2,-1,-4])) //[[-1,-1,2],[-1,0,1]]