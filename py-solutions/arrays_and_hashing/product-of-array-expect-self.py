# 238. Product of Array Except Self
# Medium

# Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

# The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

# You must write an algorithm that runs in O(n) time and without using the division operation.

 

# Example 1:

# Input: nums = [1,2,3,4]
# Output: [24,12,8,6]

# Example 2:

# Input: nums = [-1,1,0,-3,3]
# Output: [0,0,9,0,0]

 

# Constraints:

#     2 <= nums.length <= 105
#     -30 <= nums[i] <= 30
#     The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

 

# Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

from typing import List

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        
# WITH EXTRA SPACE SOLUTION

#         prefix = []
#         for i in range(len(nums)):
#             if i == 0:
#                 prefix.append(nums[i])
#             else:
#                 prefix.append(prefix[i - 1] * nums[i])
        
#         postfix = [None] * len(nums)
#         for i in range(len(nums)):
#             j = len(nums) - 1 - i
#             if j == len(nums) - 1:
#                 postfix[j] = nums[j]
#             else:
#                 postfix[j] = postfix[j + 1] * nums[j]
                
#         res = []
#         for i in range(len(nums)):
#             if i == 0:
#                 res.append(postfix[i + 1])
#             elif i == len(nums) - 1:
#                 res.append(prefix[i - 1])
#             else:
#                 res.append(prefix[i - 1] * postfix[i + 1])
#         return res

        
        res = [1]
        for i in range(1, len(nums)):
            res.append(res[i - 1] * nums[i - 1])
        
        postfix = 1
        for i in range(len(res)):
            j = len(res) - 1 - i
            res[j] = postfix * res[j]
            postfix = postfix * nums[j]
            
        return res
                