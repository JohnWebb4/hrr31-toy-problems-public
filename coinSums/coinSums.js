/*

In England the currency is made up of pound, £, and pence, p,
and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

// Whiteboard
// I: Change total
// O: Number of combinations to make change
// C: None
// E: total is zero.
// Assumptions: No fractional totals

// Whiteboard
// If total is zero return 0
// If total is 1 return 1
// Declare number of combinations
// Iterate over types of changes while less than total
// // Subtract increment of change and call on self
// // Increment number of combinations based on result
// // // If returned 0 evenly divides number increment by 1
// Return result

const coinValueIncrements = [
  1, 2, 5, 10, 20, 50, 100, 200,
];

const makeChange = (total, maxChangeValue = 200) => {
  if (total === 0) {
    return 1;
  } else if (total === 1) {
    return 1;
  }

  let numChangeCombinations = 0;

  for (let coinValueIndex = 0; coinValueIncrements[coinValueIndex] <= total; coinValueIndex += 1) {
    const coinValue = coinValueIncrements[coinValueIndex];
    if (coinValue <= maxChangeValue) {
      numChangeCombinations += makeChange(total - coinValue, coinValue);
    }
  }

  return numChangeCombinations;
};

if (process.env.DEBUG) {
  module.exports = makeChange;
}
