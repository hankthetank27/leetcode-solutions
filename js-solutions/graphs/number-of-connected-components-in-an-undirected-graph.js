// 323. Number of Connected Components in an Undirected Graph
// Medium

// You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

// Return the number of connected components in the graph.

 

// Example 1:

// Input: n = 5, edges = [[0,1],[1,2],[3,4]]
// Output: 2

// Example 2:

// Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
// Output: 1

 

// Constraints:

//     1 <= n <= 2000
//     1 <= edges.length <= 5000
//     edges[i].length == 2
//     0 <= ai <= bi < n
//     ai != bi
//     There are no repeated edges.


/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
 var countComponents = function(n, edges) {
  const graph = makeGraph(edges);
  const visited = new Set();
  let total = 0;
  
  for (let i = 0; i < n; i++){
      total += dfs(i, graph, visited);
  };
  
  return total;
};

const dfs = (i, graph, visited) => {
  if (visited.has(i)) return 0;
  
  visited.add(i);
  const nodes = graph.get(i) ?? [];
  
  for (const node of nodes){
      dfs(node, graph, visited);
  };
  
  return 1;
};

const makeGraph = (edges) => {
  let graph = new Map();
  for (let [t,f] of edges) {
      if (!graph.has(t)) graph.set(t, []);
      if (!graph.has(f)) graph.set(f, []);
      graph.get(t).push(f);
      graph.get(f).push(t);
  }
  return graph;
};