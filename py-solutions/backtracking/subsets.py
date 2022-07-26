# 78. Subsets
# Medium

# Given an integer array nums of unique elements, return all possible subsets (the power set).

# The solution set must not contain duplicate subsets. Return the solution in any order.

 

# Example 1:

# Input: nums = [1,2,3]
# Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

# Example 2:

# Input: nums = [0]
# Output: [[],[0]]

 

# Constraints:

#     1 <= nums.length <= 10
#     -10 <= nums[i] <= 10
#     All the numbers of nums are unique.


from typing import List


class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        
        def backtrack(index: int, subset: List[int]):
            result.append(subset[:])
            for i in range(index, len(nums)):
                subset.append(nums[i])
                backtrack(i + 1, subset)
                subset.pop()
            return
        
        result = []
        backtrack(0, [])
        return result   

    # def subsets(self, nums: List[int]) -> List[List[int]]:
    #     if not nums:
    #         return [[]]
    #     first = nums[0]
    #     rest = self.subsets(nums[1:])
    #     current = []
    #     for subset in rest:
    #         current.append([first] + subset)
    #     return current + rest
        