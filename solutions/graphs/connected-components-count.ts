/*
Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph. 
The function should return the number of connected components within the graph.

connectedComponentsCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
}); // -> 2

*/

type Graph = Record<string, number[]>;

const connectedComponentsCount = (graph: Graph): number => {
  const visited: Set<string> = new Set();
  let count = 0;
  for (let node in graph) {
    if (dfsTraversal(graph, node, visited)) count++;
  }
  return count;
};

const dfsTraversal = (graph: Graph, node: string, visited: Set<string>): boolean => {
  if (visited.has(node)) return false;
  visited.add(node);
  for (let edge of graph[node]){
    dfsTraversal(graph, String(edge), visited);
  }
  return true;
};

const graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
}

console.log(connectedComponentsCount(graph)) // 2


export {};