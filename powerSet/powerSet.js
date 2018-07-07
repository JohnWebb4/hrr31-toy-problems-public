/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless
 *     of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu",
 *     "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

/**
 * Return power set for a given string
 * @param {string} str String to calculate power set
 */
const powerSet = function powerSet(str) {
  // If empty string or not a string return array with empty string
  if (str === '' || typeof str !== 'string') {
    return [''];
  }

  // Holds power set and all combinations
  const set = [''];
  const visited = {};

  // Get letters
  const chars = str.split('').sort();

  // Remove duplicates and sort
  const uniqueObj = chars.reduce((unique, char) => {
    // Add char to object
    unique[char] = true;
    return unique;
  }, {});

  const uniqueArray = Object.keys(uniqueObj);

  /**
   * Get power set and all sub-power sets
   * @param {[str]} set Unique set to calculate power set
   */
  const addPowerSet = (aSet) => {
    // Join set
    const joined = aSet.join('');

    // If visited return
    if (visited[joined]) {
      return;
    }

    // Have not visited. Now visit.
    visited[joined] = true;
    set.unshift(joined);

    // If one character, do not recurse
    if (aSet.length === 1) {
      return;
    }

    // Recurse subsets
    for (let setIndex = 0; setIndex < aSet.length; setIndex += 1) {
      // Get subset and recurse
      const subSet = aSet.slice(0, setIndex).concat(aSet.slice(setIndex + 1));
      addPowerSet(subSet);
    }
  };

  // Get power sets
  addPowerSet(uniqueArray);

  // Return all power sets
  return set;
};

if (window.DEBUG) {
  module.exports = powerSet;
}
