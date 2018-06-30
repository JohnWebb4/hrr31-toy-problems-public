/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */

/* My example
 * example 6: sumArray9([100, -1, 100]); // => 199

/* Notes
 * Adding a negative number to sum subtracts
 */

/* IOCE
 * I: 1D Array
 * O: Number (Largest contiguous sum of array)
 * C: O(n) time and O(1) memory
 * E: Where adding negative number to sum leads to largest contiguous sum(see example 6)
 *    If empty, return 0
 */

/* Whiteboard
 * Use recusion
 * Base: If array length 1
 * Recursive case: If array is greater than one
 * Set value to sum of entire array
 * Find index of smallest number in array
 * Split on smallest number (remove smallest number from either array)
 * Recall sum array on both halves
 * Compare and return greatest sum (total sum, or sum of either half)
 */

// Solved in O(n) time with O(1) memory
const sumArray = (array) => {
  // Termination case
  if (array.length === 0) {
    return null;
  }

  // Base case
  if (array.length === 1) {
    return array[0];
  }

  const totalSum = array.reduce((sum, number) => sum + number);

  // Get smallest number
  const smallestNumber = array.reduce((previousSmallNumber, number) => {
    if (number < previousSmallNumber) {
      return number;
    }

    return previousSmallNumber;
  });

  const smallestNumberIndex = array.lastIndexOf(smallestNumber);

  let firstHalfSum;
  if (smallestNumberIndex !== 0) {
    firstHalfSum = sumArray(array.slice(0, smallestNumberIndex));
  } else {
    firstHalfSum = smallestNumber;
  }

  let lastHalfSum;
  if (smallestNumberIndex !== array.length - 1) {
    lastHalfSum = sumArray(array.slice(smallestNumberIndex + 1));
  } else {
    lastHalfSum = smallestNumber;
  }

  return Math.max(totalSum, firstHalfSum, lastHalfSum);
};

module.exports = sumArray;
