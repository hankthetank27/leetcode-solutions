# Implement a robin robin iterator in Python which takes in a list of lists and has:
# hasNext() to return boolean if there is a next element
# next() to return/print the next element

# The round robin iterator iterates irrespective of if every list is not the same size

# # example
# a = ['a1','a2','a3']
# b = ['b1']
# c = ['c1','c2','c3','c4']
# round_robin([a,b,c])

# round_robin.hasNext()
# round_robin.next()
# round_robin.hasNext()
# round_robin.next()
# round_robin.hasNext()
# round_robin.next()
# round_robin.hasNext()
# round_robin.next()
# round_robin.hasNext()
# round_robin.next()
# round_robin.hasNext()
# round_robin.next()
# round_robin.hasNext()
# round_robin.next()
# round_robin.hasNext()
# round_robin.next()

# # print example
# ['a1','b1','c1','a2','c2','a3','c3','c4']

from collections import deque

class RoundRobin:
    def __init__ (self, lists):
        self.lists = lists
        self.q = deque()

        max_len = 0
        for list in lists:
            max_len = max(max_len, len(list))
        for i in range(max_len):
            for list in lists:
                if i < len(list):
                    self.q.append(list[i])

    def hasNext(self):
        return len(self.q) > 0

    def next(self):
        item = self.q.popleft()
        self.q.append(item)
        return item

# DOES NOT ROTATE
# class RoundRobin:
#     def __init__ (self, lists):
#         self.lists = lists
#         self.q = deque()
#         for i in range(len(lists)):
#             self.q.append([i, 0])

#     def hasNext(self):
#         return len(self.q) > 0

#     def next(self):
#         if self.hasNext():
#             curr_list, curr_index = self.q.popleft()

#             if curr_index + 1 < len(self.lists[curr_list]):
#                 self.q.append([curr_list, curr_index + 1])

#             return self.lists[curr_list][curr_index]
#         return -1

a = ['a1','a2','a3']
b = ['b1']
c = ['c1','c2','c3','c4']
round_robin = RoundRobin([a,b,c])
round_robin.hasNext()
round_robin.next()
round_robin.hasNext()
round_robin.next()
round_robin.hasNext()
round_robin.next()
round_robin.hasNext()
round_robin.next()
round_robin.hasNext()
round_robin.next()
round_robin.hasNext()
round_robin.next()
round_robin.hasNext()
round_robin.next()
round_robin.hasNext()
round_robin.next()
round_robin.hasNext()
round_robin.next()
round_robin.hasNext()
round_robin.next()
round_robin.hasNext()
round_robin.next()
round_robin.hasNext()
round_robin.next()
round_robin.hasNext()
round_robin.next()
round_robin.hasNext()
round_robin.next()
round_robin.hasNext()
round_robin.next()
round_robin.hasNext()
round_robin.next()
round_robin.hasNext()