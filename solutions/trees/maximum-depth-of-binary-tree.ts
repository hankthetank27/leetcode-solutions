/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:

Input: root = [1,null,2]
Output: 2
*/


// Definition for a binary tree node.
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  };
};
 

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0
  let depth = 1;
  depth = Math.max(depth, 1 + maxDepth(root.right))
  depth = Math.max(depth, 1 + maxDepth(root.left))
  return depth;
};

export {};