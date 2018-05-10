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
 * Split array when flipping sign ([[1, 2, 3], [-1, -2, -3]])
 * Sum inner arrays an map to array of sums
 *
 * Declare contiguous sum
 * Iterate over array of sums
 ** If negative peak at next element
 *** If greater than absolute value of negative number, then add
 */

// Solved in O(n) time with O(1) memory
var sumArray = function(array) {
  var isPositiveSum = true;

  var sumArray = array.reduce((sumArray, number) => {
    var isNumberPositive = number >= 0;

    if (isPositiveSum === isNumberPositive) {
     sumArray[sumArray.length - 1] = Number(sumArray[sumArray.length - 1]) + number;
    } else {
      sumArray.push([number]);
      isPositiveSum = isNumberPositive;
    }

    return sumArray;
  }, [[0]]);

  var index = 0;
  var isContinuous = true;
  return sumArray.reduce((greatestContSum, continuousSameSignSum) => {
    if (isContinuous) {
      if (continuousSameSignSum >= 0) {
        greatestContSum += continuousSameSignSum;
      } else {
        var nextContinuousSameSignSum = sumArray[index + 1];
        var continousSumOfNextTwoSameSignSums = greatestContSum + continuousSameSignSum + nextContinuousSameSignSum;
        if (nextContinuousSameSignSum > continousSumOfNextTwoSameSignSums) {
          isContinuous = false;
        } else {
          greatestContSum += continuousSameSignSum;
        }
      }
    } else {
      if (continuousSameSignSum >= greatestContSum) {
        greatestContSum = continuousSameSignSum;
        isContinuous = true;
      }
    }

    index++;
    return greatestContSum;
  }, 0);
};

sumArray([1, 2, 3]); // => 6
sumArray([1, 2, 3, -4]); // 6
sumArray([1, 2, 3, -4, 5]); // 7
sumArray([4, -1, 5]); // => 8
sumArray([10, -11, 11]); // 11