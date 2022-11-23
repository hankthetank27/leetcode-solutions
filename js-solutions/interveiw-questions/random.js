const coinChange = (amount, coins) => {
  const backtrack = (amount, idx) => {
    if (amount === 0) return 1;
    if (amount < 0 || idx >= coins.length) return 0;
    backtrack(amount, idx + 1) + backtrack(amount - coins[idx], idx);
  }
  return backtrack(amount, 0)
}

console.log(coinChange(100, [1, 5, 10, 25, 50]))


const partitionNum = (num) => {
  const backtrack = (num, rest) => {
    if (num === 0) return 1;
    if (num < 0 || rest === 0) return 0;
    return backtrack((num - rest), rest) + backtrack(num, (rest - 1));
  }
  return backtrack(num, num)
}

console.log(partitionNum(5))