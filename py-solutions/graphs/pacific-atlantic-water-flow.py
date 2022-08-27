# 417. Pacific Atlantic Water Flow
# Medium

# There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

# The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

# The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

# Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

 

# Example 1:

# Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
# Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

# Example 2:

# Input: heights = [[2,1],[1,2]]
# Output: [[0,0],[0,1],[1,0],[1,1]]

 

# Constraints:

#     m == heights.length
#     n == heights[r].length
#     1 <= m, n <= 200
#     0 <= heights[r][c] <= 105

from typing import List

class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        row_len, col_len = len(heights), len(heights[0])
        atlantic = set()
        pacific = set()
        
        for i in range(row_len):
            self.dfs(heights, pacific, i, 0, heights[i][0])
            self.dfs(heights, atlantic, i, col_len - 1, heights[i][col_len - 1])
        
        for i in range(col_len):
            self.dfs(heights, pacific, 0, i, heights[0][i])
            self.dfs(heights, atlantic, row_len - 1, i, heights[row_len - 1][i])
            
        result = []
        for row in range(row_len):
            for col in range(col_len):
                if (row,col) in atlantic and (row,col) in pacific:
                    result.append([row, col])
        return result
    
    def dfs(self, heights, visited, row, col, prev):
        row_len, col_len = len(heights), len(heights[0])
        if (
            (row,col) in visited
            or row < 0
            or col < 0
            or row == row_len
            or col == col_len
            or heights[row][col] < prev
        ): return
        
        visited.add((row,col))
        
        self.dfs(heights, visited, row + 1, col, heights[row][col])
        self.dfs(heights, visited, row - 1, col, heights[row][col])
        self.dfs(heights, visited, row, col + 1, heights[row][col])
        self.dfs(heights, visited, row, col - 1, heights[row][col])
        return
            