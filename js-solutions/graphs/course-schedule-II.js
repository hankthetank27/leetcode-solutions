// 210. Course Schedule II
// Medium

// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

//     For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.

// Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.



// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: [0,1]
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].

// Example 2:

// Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
// Output: [0,2,1,3]
// Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
// So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].

// Example 3:

// Input: numCourses = 1, prerequisites = []
// Output: [0]



// Constraints:

//     1 <= numCourses <= 2000
//     0 <= prerequisites.length <= numCourses * (numCourses - 1)
//     prerequisites[i].length == 2
//     0 <= ai, bi < numCourses
//     ai != bi
//     All the pairs [ai, bi] are distinct.

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const graph = makeGraph(prerequisites);
  const visited = new Set(), cycle = new Set();
  const res = [];

  const dfs = (courseNum) => {
    if (visited.has(courseNum)) return true;
    if (cycle.has(courseNum)) return false;

    cycle.add(courseNum);
    const preReqs = graph.get(courseNum) || [];

    for (const course of preReqs) {
      if (!dfs(course)) return false
    };

    cycle.delete(courseNum);
    visited.add(courseNum);
    res.push(courseNum);

    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return [];
  };
  return res;
};


const makeGraph = (prerequisites) => {
  const graph = new Map();
  for (const [course, preReq] of prerequisites) {
    if (!graph.has(course)) graph.set(course, []);
    graph.get(course).push(preReq);
  };
  return graph;
};