/*
695. Max Area of Island
Medium

You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.

 

Example 1:

Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.

Example 2:

Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0
*/


//original solution using Set
// function maxAreaOfIsland(grid: number[][]): number {
//     let maxArea = 0;
//     const visited: Set<string> = new Set();
//     for (let r = 0; r < grid.length; r++){
//         for (let c = 0; c < grid[r].length; c++){
//             if (grid[r][c] === 1 && !visited.has(`${r},${c}`)) maxArea = Math.max(maxArea, dfsCount(grid, r, c, visited));
//         }
//     }
//     return maxArea;
// };

// function dfsCount(grid: number[][], r: number, c: number, visited: Set<string>){
//     const location = `${r},${c}`;
//     if (visited.has(location)) return 0;
//     visited.add(location);
//     let size = 1;
//     if (grid[r+1]?.[c] === 1) size += dfsCount(grid, r+1, c, visited);
//     if (grid[r-1]?.[c] === 1) size += dfsCount(grid, r-1, c, visited);
//     if (grid[r]?.[c+1] === 1) size += dfsCount(grid, r, c+1, visited);
//     if (grid[r]?.[c-1] === 1) size += dfsCount(grid, r, c-1, visited);
//     return size;
// };


//instead of using Set to track visited indicies, set value to 0 once visited.
function maxAreaOfIsland(grid: number[][]): number {
  let maxArea = 0;
  for (let r = 0; r < grid.length; r++){
      for (let c = 0; c < grid[r].length; c++){
          if (grid[r][c] === 1) maxArea = Math.max(maxArea, dfsCount(grid, r, c));
      }
  }
  return maxArea;
};

function dfsCount(grid: number[][], r: number, c: number){
  grid[r][c] = 0;
  let size = 1;
  if (grid[r+1]?.[c] === 1) size += dfsCount(grid, r+1, c);
  if (grid[r-1]?.[c] === 1) size += dfsCount(grid, r-1, c);
  if (grid[r]?.[c+1] === 1) size += dfsCount(grid, r, c+1);
  if (grid[r]?.[c-1] === 1) size += dfsCount(grid, r, c-1);
  return size;
};