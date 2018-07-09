/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

/**
 * Find where pivot or rotation is in array
 * @param {[*]} rotated Rotated array
 * @returns {number} Index of pivot or rotation
 */
const findPivot = (rotated) => {
  // Base case
  if (rotated.length <= 1) {
    // One element or empty array
    return 0;
  } else if (rotated[0] <= rotated[rotated.length - 1]) {
    // Not rotated
    return 0;
  } else if (rotated[0] > rotated[1]) {
    // At pivot point
    return 1;
  }

  // Get values
  const middleIndex = Math.floor(rotated.length / 2);
  const middleValue = rotated[middleIndex];

  if (rotated[0] > middleValue) {
    // Shift is in first half
    return findPivot(rotated.slice(0, middleIndex + 1));
  }

  // Shift is in second half
  return middleIndex + findPivot(rotated.slice(middleIndex));
};

/**
 * Search index of value in rotated array
 * @param {[number]} rotated Rotated array to search
 * @param {number} target value to get index of
 */
const rotatedArraySearch = function rotatedArraySearch(rotated, target) {
  // Get pivot point of rotation
  const pivot = findPivot(rotated);

  // Binary search
  // Get min, middle, and max values
  const minIndex = pivot;
  const minValue = rotated[minIndex];

  const middleIndex = Math.floor(((rotated.length / 2) + pivot) % rotated.length);
  const middleValue = rotated[middleIndex];

  const maxIndex = Math.floor(((rotated.length - 1) + pivot) % rotated.length);
  const maxValue = rotated[maxIndex];

  // Test target is min, middle, or max
  if (target === minValue) {
    // Target is left value, return index
    return minIndex;
  } else if (target === middleValue) {
    // Target is middle value, return index
    return middleIndex;
  } else if (target === maxValue) {
    // Target is right value, return index
    return maxIndex;
  }

  if (target > minValue && target < middleValue) {
    // Is in first half
    return minIndex + rotatedArraySearch(rotated.slice(minIndex, middleIndex + 1), target);
  } if (target > middleValue && target < maxValue) {
    // Is in second half
    return middleIndex + rotatedArraySearch(rotated.slice(middleIndex), target);
  }

  // Is not in array
  return null;
};

if (window.DEBUG) {
  module.exports = rotatedArraySearch;
}

