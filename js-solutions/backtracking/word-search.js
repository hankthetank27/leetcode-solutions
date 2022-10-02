// 79. Word Search
// Medium

// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

// Example 1:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

// Example 2:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true

// Example 3:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false

 

// Constraints:

//     m == board.length
//     n = board[i].length
//     1 <= m, n <= 6
//     1 <= word.length <= 15
//     board and word consists of only lowercase and uppercase English letters.


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
  const ROWS = board.length;
  const COLS = board[0].length;
  //const visited = new Set();
  
  const backtrackDfs = (row, col, idx) => {
      if (idx === word.length) return true;
      
      //const loc = `${row},${col}`;
      
      if (
          row < 0 ||
          col < 0 ||
          row >= ROWS ||
          col >= COLS ||
          word[idx] !== board[row][col]){
          return false;
      };
      
      //visited.add(loc);
      const currChar = board[row][col];
      board[row][col] = 0;
      
      const status = (
          backtrackDfs(row + 1, col, idx + 1) ||
          backtrackDfs(row - 1, col, idx + 1) ||
          backtrackDfs(row, col + 1, idx + 1) ||
          backtrackDfs(row, col - 1, idx + 1)
      );
      
      //visited.delete(loc);
      board[row][col] = currChar;
      
      return status;
  };
  
  
  for (let r = 0; r < ROWS; r++){
      for (let c = 0; c < COLS; c++){
          if (board[r][c] === word[0] && backtrackDfs(r, c, 0)) return true;
      }
  }
  return false;
};