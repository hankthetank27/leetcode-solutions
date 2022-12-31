// 63. Unique Paths II
// Medium
// 6.4K
// 423
// company
// Amazon
// company
// Google
// company
// Facebook

// You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

// Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The testcases are generated so that the answer will be less than or equal to 2 * 109.

//  

// Example 1:

// Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
// Output: 2
// Explanation: There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right

// Example 2:

// Input: obstacleGrid = [[0,1],[0,0]]
// Output: 1

//  

// Constraints:

//     m == obstacleGrid.length
//     n == obstacleGrid[i].length
//     1 <= m, n <= 100
//     obstacleGrid[i][j] is 0 or 1.

// Accepted
// 637.5K
// Submissions
// 1.6M
// Acceptance Rate
// 39.2%

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(grid) {
  const ROWS = grid.length - 1, COLS = grid[0].length - 1
  const dfs = (row, col, seen) => {
      const current = `${row},${col}`
      if (current in seen){
          return seen[current]
      } else if (
          row > ROWS ||
          col > COLS ||
          row < 0 ||
          col < 0 ||
          grid[row][col] === 1
      ){
          return 0
      } else if (row === ROWS && col === COLS){
          return 1
      } 
      return seen[current] = dfs(row + 1, col, seen) + dfs(row, col + 1, seen)
  }
  return dfs(0, 0, {})
};