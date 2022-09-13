# 128. Longest Consecutive Sequence
# Medium

# Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

# You must write an algorithm that runs in O(n) time.

 

# Example 1:

# Input: nums = [100,4,200,1,3,2]
# Output: 4
# Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

# Example 2:

# Input: nums = [0,3,7,2,5,8,4,6,0,1]
# Output: 9

 

# Constraints:

#     0 <= nums.length <= 105
#     -109 <= nums[i] <= 109

from typing import List


# make set of input array
# loop through set checking to see if num - 1 is NOT in set
    # then looping while num + 1 is in set, updating count of streak for return value.
# (idea being to find the lowest possible number in streak, then counting from the bottom up)

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        map = set(nums)
        res = 0
        for num in map:
            if num - 1 not in map:
                curr_num = num
                curr_streak = 1
                while curr_num + 1 in map:
                    curr_num += 1
                    curr_streak += 1
                res = max(res, curr_streak)
        return res
    