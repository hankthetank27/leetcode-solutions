/*
Write a function, largestComponent, that takes in the adjacency list of an undirected graph. 
The function should return the size of the largest connected component in the graph.

largestComponent({
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
}); // -> 4

largestComponent({
  1: ['2'],
  2: ['1','8'],
  6: ['7'],
  9: ['8'],
  7: ['6', '8'],
  8: ['9', '7', '2']
}); // -> 6
*/

interface Graph {
  [x: string] : number[] | string[];
}

const largestComponent = (graph: Graph): number => {
  const visted: Set<string> = new Set();
  let largest = 0;
  for (let node in graph) {
    largest = Math.max(largest, dfsTraversal(graph, node, visted));
  }
  return largest;
};

const dfsTraversal = (graph: Graph, node: string, visted: Set<string>): number => {
  if (visted.has(node)) return 0;
  visted.add(node);
  let size = 1
  for (let edge of graph[node]) {
    size += dfsTraversal(graph, String(edge), visted);
  };
  return size;
};

const graph = largestComponent({
  1: ['2'],
  2: ['1','8'],
  6: ['7'],
  9: ['8'],
  7: ['6', '8'],
  8: ['9', '7', '2']
})