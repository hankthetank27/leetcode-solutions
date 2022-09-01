# 90. Subsets II
# Medium

# Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

# The solution set must not contain duplicate subsets. Return the solution in any order.

 

# Example 1:

# Input: nums = [1,2,2]
# Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

# Example 2:

# Input: nums = [0]
# Output: [[],[0]]

 

# Constraints:

#     1 <= nums.length <= 10
#     -10 <= nums[i] <= 10

# Accepted
# 583,897
# Submissions
# 1,065,953

from typing import List

class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        
        def backtrack(index, subset, result):
            result.append(subset[:])
            
            for i in range(index, len(nums)):
                if  i > index and nums[i] == nums[i - 1]:
                    continue  
                subset.append(nums[i])
                backtrack(i + 1, subset, result)
                subset.pop()

            return result
                
        nums.sort()    
        return backtrack(0, [], [])