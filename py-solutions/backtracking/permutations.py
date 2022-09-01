# 46. Permutations
# Medium

# Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

# Example 1:

# Input: nums = [1,2,3]
# Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

# Example 2:

# Input: nums = [0,1]
# Output: [[0,1],[1,0]]

# Example 3:

# Input: nums = [1]
# Output: [[1]]

 

# Constraints:

#     1 <= nums.length <= 6
#     -10 <= nums[i] <= 10
#     All the integers of nums are unique.

from typing import List

class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        
        def backtrack(index, subset):
            
            if index == len(nums):
                return result.append(subset[:])        
            
            for i in range(len(nums)):
                if nums[i] in subset:
                    continue
                subset.append(nums[i])
                backtrack(index + 1, subset)
                subset.pop()
            
        result = []
        backtrack(0, [])
        return result