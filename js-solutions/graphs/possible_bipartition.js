// 886. Possible Bipartition
// Medium
// 3.9K
// 93
// company
// ByteDance
// company
// TikTok
// company
// DoorDash

// We want to split a group of n people (labeled from 1 to n) into two groups of any size. Each person may dislike some other people, and they should not go into the same group.

// Given the integer n and the array dislikes where dislikes[i] = [ai, bi] indicates that the person labeled ai does not like the person labeled bi, return true if it is possible to split everyone into two groups in this way.

//  

// Example 1:

// Input: n = 4, dislikes = [[1,2],[1,3],[2,4]]
// Output: true
// Explanation: group1 [1,4] and group2 [2,3].

// Example 2:

// Input: n = 3, dislikes = [[1,2],[1,3],[2,3]]
// Output: false

// Example 3:

// Input: n = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
// Output: false

//  

// Constraints:

//     1 <= n <= 2000
//     0 <= dislikes.length <= 104
//     dislikes[i].length == 2
//     1 <= dislikes[i][j] <= n
//     ai < bi
//     All the pairs of dislikes are unique.

/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
  const graph = makeGraph(dislikes)
  const colorMap = {}
  for (const person in graph){
      if (!colorMap[person]){
          if (!dfs(graph, person, colorMap, 1)) return false
      }
  }
  return true
};

const dfs = (graph, person, colorMap, color) => {
  colorMap[person] = color
  for (const neighbor of graph[person]){
      if (!colorMap[neighbor]) dfs(graph, neighbor, colorMap, color === 1 ? 2 : 1)
      if (colorMap[neighbor] === color) return false
  }
  return true
}


const makeGraph = list => {
  const graph = {}
  for (const [a, b] of list){
      graph[a]
          ? graph[a].push(b)
          : graph[a] = [b]
      graph[b]
          ? graph[b].push(a)
          : graph[b] = [a]
  }
  return graph
}