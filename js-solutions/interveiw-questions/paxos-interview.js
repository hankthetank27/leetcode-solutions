// Trade:
// id, type (BUY/SELL), totalGold, totalUSD, ourTag, theirTag
// where: 
// totalGold, totalUSD > 0
// for all ourTag theirTag, ourTag != theirTag (these are non-intersecting sets)

// Trades:
// * A: ourTag = “x”, theirTag = “0”
// * B: ourTag = “x”, theirTag = “1”
// * C: ourTag = “y”, theirTag = “1”
// * D: ourTag = “y”, theirTag = “2”
// * E: ourTag = "z", theirTag = "2"

// A,B,C are in the same group.
// D is in a group by itself.

// Problem 2:
// Input: List of Trades, a tag
// Output: The NetPosition for the group of Trades containing that tag.

const trades = [
  {ourTag : 'x', theirTag : '0'},
  {ourTag : 'y', theirTag : '0'},
  {ourTag : 'y', theirTag : '1'},
  {ourTag : 'y', theirTag : '2'},
  {ourTag : 'z', theirTag : '2'},
  {ourTag : 'n', theirTag : '3'},
  {ourTag : 'x', theirTag : '5'},
];


function calcNetByTag (trades, tag) {
  let netGold = 0;
  let netUSD = 0;

  const seen = new Set();

  for (const trade of trades){
    const { type, totalGold, totalUSD, ourTag, theirTag } = trade;
    
    if (ourTag === tag || seen.has(ourTag)){
      seen.add(theirTag);
    };

    if (theirTag === tag || seen.has(theirTag)){
      seen.add(ourTag);
    };

    if (ourTag === tag || theirTag === tag || seen.has(ourTag) || seen.has(theirTag)){
      if (type === 'BUY') {
        netGold += totalGold;
        netUSD -= totalUSD;
      } else {
        netGold -= totalGold;
        netUSD += totalUSD;
      };
    };
  };

  return { netGold, netUSD };
};