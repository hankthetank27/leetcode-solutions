// 98. Validate Binary Search Tree
// Medium
// 13.8K
// 1.1K
// company
// Bloomberg
// company
// Amazon
// company
// Yahoo

// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

//     The left
//     subtree
//     of a node contains only nodes with keys less than the node's key.
//     The right subtree of a node contains only nodes with keys greater than the node's key.
//     Both the left and right subtrees must also be binary search trees.

 

// Example 1:

// Input: root = [2,1,3]
// Output: true

// Example 2:

// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

 

// Constraints:

//     The number of nodes in the tree is in the range [1, 104].
//     -231 <= Node.val <= 231 - 1

/**
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/
/**
* @param {TreeNode} root
* @return {boolean}
*/

var isValidBST = function(root) {
  const dfs = (node, low, high) => {
      if (!node) return true
      if (node.val <= low || node.val >= high) return false
      //making range to check, inheriting parent as highest possible value and previous lowest on left traversal, and parent as lowest possible value and previous higest on right traversal
      return dfs(node.left, low, node.val) && dfs(node.right, node.val, high)
  }
  return dfs(root, -Infinity, Infinity)
};