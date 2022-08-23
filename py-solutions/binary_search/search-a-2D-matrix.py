# 74. Search a 2D Matrix
# Medium

# Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

#     Integers in each row are sorted from left to right.
#     The first integer of each row is greater than the last integer of the previous row.

 

# Example 1:

# Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
# Output: true

# Example 2:

# Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
# Output: false

 

# Constraints:

#     m == matrix.length
#     n == matrix[i].length
#     1 <= m, n <= 100
#     -104 <= matrix[i][j], target <= 104

from typing import List

class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        
        left_outer = 0
        right_outer = len(matrix) - 1
        
        while left_outer <= right_outer:
            mid_outer = (left_outer + right_outer) // 2
            if target < matrix[mid_outer][0]:
                right_outer = mid_outer - 1
            elif target > matrix[mid_outer][len(matrix[mid_outer]) - 1]:
                left_outer = mid_outer + 1
            else:    
                return self.searchSubArr(matrix[mid_outer], target)
        return False

    def searchSubArr(self, list: List[int], target: int) -> bool:

        left = 0
        right = len(list) - 1 

        while left <= right:
            mid = (left + right) // 2          
            if target == list[mid]:
                return True
            elif target < list[mid]:
                right = mid - 1
            elif target > list[mid]:
                left = mid + 1
        return False