# 40. Combination Sum II
# Medium

# Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

# Each number in candidates may only be used once in the combination.

# Note: The solution set must not contain duplicate combinations.

 

# Example 1:

# Input: candidates = [10,1,2,7,6,1,5], target = 8
# Output: 
# [
# [1,1,6],
# [1,2,5],
# [1,7],
# [2,6]
# ]

# Example 2:

# Input: candidates = [2,5,2,1,2], target = 5
# Output: 
# [
# [1,2,2],
# [5]
# ]

 

# Constraints:

#     1 <= candidates.length <= 100
#     1 <= candidates[i] <= 50
#     1 <= target <= 30

from typing import List

class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        
        def backtrack(index, curr_sum, comb):
            if curr_sum == target:
                result.append(comb[:])
                return
            if curr_sum > target:
                return
            
            for i in range(index, len(candidates)):
                if i > index and candidates[i - 1] == candidates[i]:
                    continue
                comb.append(candidates[i])
                backtrack(i + 1, curr_sum + candidates[i], comb)
                comb.pop()
                
        candidates.sort()
        result = []
        backtrack(0, 0, [])
        return result