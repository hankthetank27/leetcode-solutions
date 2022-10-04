// 199. Binary Tree Right Side View
// Medium

// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.



// Example 1:

// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]

// Example 2:

// Input: root = [1,null,3]
// Output: [1,3]

// Example 3:

// Input: root = []
// Output: []



// Constraints:

//     The number of nodes in the tree is in the range [0, 100].
//     -100 <= Node.val <= 100

//Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

//DFS
var rightSideView = function (root) {
  if (!root) return [];

  const dfs = (node, res, depth) => {
    if (!node) return;
    if (depth > currMax) {
      currMax = depth;
      res.push(node.val);
    };
    dfs(node.right, res, depth + 1);
    dfs(node.left, res, depth + 1);
  };

  let currMax = 0;
  const res = [root.val];
  dfs(root, res, 0);
  return res;
};