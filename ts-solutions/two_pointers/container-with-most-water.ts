/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:

Input: height = [1,1]
Output: 1
*/

//height of the min between both left and right times the space between them
//increment left if left is less than right
//incrment right if right is less than left

function maxArea(height: number[]): number {
  let maxVol = 0;
  let left = 0, right = height.length - 1;
  
  while (left < right) {
    const currentMin = Math.min(height[left], height[right]);
    maxVol = Math.max(maxVol, currentMin * (right - left));
    height[left] < height[right] ? left++ : right--;
  };
  
  return maxVol;
};

