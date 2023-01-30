// 684. Redundant Connection
// Medium
// 4.9K
// 337
// company
// Apple
// company
// Amazon
// company
// Microsoft

// In this problem, a tree is an undirected graph that is connected and has no cycles.

// You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed. The graph is represented as an array edges of length n where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the graph.

// Return an edge that can be removed so that the resulting graph is a tree of n nodes. If there are multiple answers, return the answer that occurs last in the input.

 

// Example 1:

// Input: edges = [[1,2],[1,3],[2,3]]
// Output: [2,3]

// Example 2:

// Input: edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]
// Output: [1,4]

 

// Constraints:

//     n == edges.length
//     3 <= n <= 1000
//     edges[i].length == 2
//     1 <= ai < bi <= edges.length
//     ai != bi
//     There are no repeated edges.
//     The given graph is connected.


/**
 * @param {number[][]} edges
 * @return {number[]}
 */

//graph DFS
var findRedundantConnectionDFS = function(edges) {
  const dfs = (node, target, seen) => {
      if (seen.has(node)) return false
      if (node === target) return true
      seen.add(node)
      for (const edge of graph[node] || []){
          if(dfs(edge, target, seen)) return true
      }
  }

  const graph = {}
  let res = []
  for (const [i, j] of edges){
      if (dfs(i, j, new Set())) res = [i, j]
      graph[i] 
          ? graph[i].push(j) 
          : graph[i] = [j]
      graph[j]
          ? graph[j].push(i)
          : graph[j] = [i]
  }
  return res
};

//union find
var findRedundantConnectionUF = function(edges) {
  const par = new Array(edges.length + 1).fill(1).map((_, i) => i)
  const rank = new Array(edges.length + 1).fill(1)

  const find = (n) => {
      if (par[n] === n) return n
      const res = find(par[n])
      par[n] = res
      return res
  }

  const union = (n1, n2) => {
      const p1 = find(n1)
      const p2 = find(n2)

      if (p1 === p2) return false

      if (rank[p1] > rank[p2]){
          par[p2] = p1
          rank[p1] += p2
      } else {
          par[p1] = p2
          rank[p2] += p1
      }
      return true
  }

  for (const [n1, n2] of edges){
      if (!union(n1, n2)) return [n1, n2]
  }
};