# 25. Reverse Nodes in k-Group
# Hard
# 10.4K
# 560
# company
# Amazon
# company
# Microsoft
# company
# Bloomberg

# Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

# k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

# You may not alter the values in the list's nodes, only nodes themselves may be changed.

 

# Example 1:

# Input: head = [1,2,3,4,5], k = 2
# Output: [2,1,4,3,5]

# Example 2:

# Input: head = [1,2,3,4,5], k = 3
# Output: [3,2,1,4,5]

 

# Constraints:

#     The number of nodes in the list is n.
#     1 <= k <= n <= 5000
#     0 <= Node.val <= 1000

 

# Follow-up: Can you solve the problem in O(1) extra memory space?

from typing import Optional, List


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:

        def reverse(node, prev, count):
            if not node or count == 0:
                return prev
            next = node.next
            node.next = prev
            return reverse(next, node, count - 1)

        def getNext(node, count):
            if count == 0:
                return node
            if not node:
                return -1
            return getNext(node.next, count - 1)

        def iterList(node):
            next = getNext(node, k)
            if next == -1:
                return node
            return reverse(node, iterList(next), k)

        return iterList(head)