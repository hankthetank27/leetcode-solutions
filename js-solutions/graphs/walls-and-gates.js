// 286. Walls and Gates
// Medium

// You are given an m x n grid rooms initialized with these three possible values.

//     -1 A wall or an obstacle.
//     0 A gate.
//     INF Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.

// Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.



// Example 1:

// Input: rooms = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]
// Output: [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]

// Example 2:

// Input: rooms = [[-1]]
// Output: [[-1]]



// Constraints:

//     m == rooms.length
//     n == rooms[i].length
//     1 <= m, n <= 250
//     rooms[i][j] is -1, 0, or 231 - 1.


/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function (rooms) {
  const ROWS = rooms.length, COLS = rooms[0].length, INF = 2147483647;
  const queue = [];

  const bfs = (queue) => {
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    while (queue.length) {
      const [r, c] = queue.shift();

      for (const dir of directions) {
        const nr = r + dir[0];
        const nc = c + dir[1];
        if (
          nr < 0 ||
          nc < 0 ||
          nr === ROWS ||
          nc === COLS ||
          rooms[nr][nc] !== INF
        ) continue;

        rooms[nr][nc] = rooms[r][c] + 1;
        queue.push([nr, nc]);
      };

    };
  };

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (rooms[r][c] === 0) {
        queue.push([r, c]);
      }
    }
  }

  bfs(queue);
  return rooms;
};