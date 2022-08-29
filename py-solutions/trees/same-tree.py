# 100. Same Tree
# Easy

# Given the roots of two binary trees p and q, write a function to check if they are the same or not.

# Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

# Example 1:

# Input: p = [1,2,3], q = [1,2,3]
# Output: true

# Example 2:

# Input: p = [1,2], q = [1,null,2]
# Output: false

# Example 3:

# Input: p = [1,2,1], q = [1,1,2]
# Output: false

 

# Constraints:

#     The number of nodes in both trees is in the range [0, 100].
#     -104 <= Node.val <= 104


# Definition for a binary tree node.

from collections import deque
from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:

    #DFS
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        if p and q:
            return p.val == q.val and self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
        else:
            return p == q

    #BFS
    def isSameTreeBFS(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        queue = deque([p, q])
        while queue:
            cur_p = queue.popleft()
            cur_q = queue.popleft()
            
            if not cur_p or not cur_q:
                if cur_p != cur_q:
                    return False 
            elif cur_p.val != cur_q.val:
                return False
            
            if cur_p and cur_q:
                queue.append(cur_p.left)
                queue.append(cur_q.left)
                queue.append(cur_p.right)
                queue.append(cur_q.right)       
        return True
