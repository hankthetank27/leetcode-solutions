# 242. Valid Anagram
# Easy

# Given two strings s and t, return true if t is an anagram of s, and false otherwise.

# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

# Example 1:

# Input: s = "anagram", t = "nagaram"
# Output: true

# Example 2:

# Input: s = "rat", t = "car"
# Output: false

 

# Constraints:

#     1 <= s.length, t.length <= 5 * 104
#     s and t consist of lowercase English letters.

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        map = {}
        # remaining = len(t)
        for char in s:
            map[char] = map.get(char, 0) + 1
        for char in t:
            if char in map and map[char] != 0:
                map[char] -= 1
                # remaining -= 1
            else:
                return False
        return True

    def testMap(self, ):
        map = {
            'a' : 10,
            'b' : 11,
            'c' : 12
        }

        for key, val in map.items():
            print(f'{key}, {val} im tesing jamies computer too')

test = Solution()
test.testMap()
print(test.isAnagram('asdf', 'fdsa'))