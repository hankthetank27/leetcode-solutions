# 322. Coin Change
# Medium

# You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

# Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

# You may assume that you have an infinite number of each kind of coin.

 

# Example 1:

# Input: coins = [1,2,5], amount = 11
# Output: 3
# Explanation: 11 = 5 + 5 + 1

# Example 2:

# Input: coins = [2], amount = 3
# Output: -1

# Example 3:

# Input: coins = [1], amount = 0
# Output: 0

 

# Constraints:

#     1 <= coins.length <= 12
#     1 <= coins[i] <= 231 - 1
#     0 <= amount <= 104

from typing import List
import math

class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        
        def search (coins, amount, memo):
            if amount in memo:
                return memo[amount]
            if amount == 0:
                return 0

            min_coin = math.inf

            for coin in coins:
                if amount - coin >= 0:
                    min_coin = min(min_coin, 1 + search(coins, amount - coin, memo))
                    
            memo[amount] = min_coin
            return memo[amount]
        
        res = search(coins, amount, {})
        if res == math.inf:
            return -1
        else:
            return res
        

