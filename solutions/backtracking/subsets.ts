/*
78. Subsets
Medium

Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Example 2:

Input: nums = [0]
Output: [[],[0]]
*/



function subsets(nums: number[]): number[][] {
    const result: Array<Array<number>> = [];
  
    function backTrack(index: number, subset: Array<number>){
        //push copy of subset (refernced globaly)
        result.push([...subset]);

        //push all subsets starting with nums[i] where i is 0, then backtrack down by popping off elements subset after end of loop.
        for (let i = index; i < nums.length; i++){
            subset.push(nums[i]);
            backTrack(i + 1, subset);
            subset.pop();
        };
    };
  
    backTrack(0, []);
    return result;
};


//functional/recursive approach

// function subsets(nums: number[]): number[][] {
//   if (nums.length === 0) return [[]];
//   const first = nums[0];
//   const rest = subsets(nums.slice(1));
//   const current = [];
//   for (const subset of rest){
//       current.push([...subset, first]);
//   }
//   return [...current, ...rest];
// };

export {};