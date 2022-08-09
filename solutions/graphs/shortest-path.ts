/*
shortest path

Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). 
The function should return the length of the shortest path between A and B. 
Consider the length as the number of edges in the path, not the number of nodes. If there is no path between A and B, then return -1.

test_00:

const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];

shortestPath(edges, 'w', 'z'); // -> 2

test_01:

const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];

shortestPath(edges, 'y', 'x'); // -> 1

test_02:

const edges = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f']
];

shortestPath(edges, 'a', 'e'); // -> 3
*/

interface Graph {
  [x: string] : string[]
}

const shortestPath = (edges: string[][], nodeA: string, nodeB: string) => {
  const graph: Graph = makeGraph(edges);
  const visited: Set<string> = new Set();
  const queue = [{node: nodeA, steps: 0}];
  
  while (queue.length) {
    const {node, steps} = queue.shift();
    if (node === nodeB) return steps;
    visited.add(node);
    
    for (let next of graph[node]){
      if (!visited.has(next)){
        queue.push({node: next, steps: steps + 1});
      } 
    }
  }
  
  return -1;
};


const makeGraph = (edges: string[][]) => {
  const graph: Graph = {};
  for (let edge of edges){
    const [a, b] = edge;
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};


console.log(shortestPath([
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
], 'w', 'z')) // 2



export {};