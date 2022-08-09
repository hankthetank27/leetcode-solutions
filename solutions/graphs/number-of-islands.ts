/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.


Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

*/

function numIslands(grid: string[][]): number {
  let result = 0;
  const visited: Set<string> = new Set();
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++ ) {
      if (dfsTraversal(grid, r, c, visited) === true) result++;
    }
  }
  return result;
};
  

function dfsTraversal (grid: string[][], r: number, c: number, visited: Set<string>){
  const pos = `${r},${c}`;
  if (visited.has(pos) || grid[r]?.[c] !== '1') return false;
  visited.add(pos);
  dfsTraversal(grid, r + 1, c, visited);
  dfsTraversal(grid, r - 1, c, visited);
  dfsTraversal(grid, r, c + 1, visited);
  dfsTraversal(grid, r, c - 1, visited);
  return true;
};

console.log(numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
])); //1

console.log(numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
])) //3


export {};