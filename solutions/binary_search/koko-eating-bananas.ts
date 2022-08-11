/*
Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.

 

Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4

Example 2:

Input: piles = [30,11,23,4,20], h = 5
Output: 30

Example 3:

Input: piles = [30,11,23,4,20], h = 6
Output: 23
*/

function minEatingSpeed(piles: number[], h: number): number {
  
  let left = 0;
  let right = Math.max(...piles);
  let res = right;
  
  while(left <= right){
    
    let totalTime = 0;
    const mid = left + Math.floor((right - left) / 2);
    
    for (let j = 0; j < piles.length; j++){
      totalTime += Math.ceil(piles[j] / mid);
      if (totalTime > h) break;
    };
    
    if (totalTime <= h) {
      res = Math.min(res, mid);
      right = mid - 1;
    };
    
    if (totalTime > h){
      left = mid + 1
    };
    
  };
  return res;
};


//brute force
// function minEatingSpeed(piles: number[], h: number): number {
//   const maxVal = piles.reduce((acc, cur) => Math.max(acc, cur));
//   for (let i = 1; i <= maxVal; i++){
//     let totalTime = 0;  
//     for (let j = 0; j < piles.length; j++){
//       totalTime += Math.ceil(piles[j] / i);
//       if (totalTime > h) break;
//     }
//     if (totalTime <= h) return i;
//   }
// };