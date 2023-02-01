// 230. Kth Smallest Element in a BST
// Medium
// 9.2K
// 164
// company
// Uber
// company
// Amazon
// company
// Expedia

// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

 

// Example 1:

// Input: root = [3,1,4,null,2], k = 1
// Output: 1

// Example 2:

// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3

 

// Constraints:

//     The number of nodes in the tree is n.
//     1 <= k <= n <= 104
//     0 <= Node.val <= 104


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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  const dfs = (node) => {
      if (!k || !node) return node
      const smallest = dfs(node.left)
      k -= 1
      if (k === 0) return node.val
      if (k > 0){
          return dfs(node.right)
      } else {
          return smallest
      }
  }
  return dfs(root).val
}