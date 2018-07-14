/*
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

/**
 * Get the longest run of duplicate
 * characters in a string
 * @param {string} string String to get longest run of
 * @returns {number[] | null} Pair of start and end indices
 */
const longestRun = function longestRun(string) {
  if (typeof string !== 'string' || string === '') {
    // Empty string or not a string
    // Return null
    return null;
  }

  // Defined longest run values
  let longestRunStart = 0;
  let longestRunEnd = 0;
  let longestRunCount = 0;

  // Define current run values
  let currentRunCount = 0;
  let currentRunChar = '';

  const updateLongest = (char, index) => {
    if (currentRunCount > longestRunCount) {
      // Update longest run
      longestRunStart = (index - currentRunCount);
      longestRunEnd = index - 1;
      longestRunCount = currentRunCount;
    }

    // Update current run
    currentRunCount = 1;
    currentRunChar = char;
  };

  string.split('').forEach((char, index) => {
    // Compare each character for a run
    if (char === currentRunChar) {
      // Still in run increment counter
      currentRunCount += 1;
      return;
    }

    // End of run
    // Update longest run
    updateLongest(char, index);
  });

  // Update for last run
  updateLongest('', string.length);

  // Return longest run
  return [longestRunStart, longestRunEnd];
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
/**
 * Generates a random string of alphabetical characters
 * @param {number} len Length of string
 * @returns {string} Random alphabetical string
 */
const randomString = function randomString(len) {
  let text = '';
  const possible = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < len; i += 1) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

if (window.DEBUG) {
  module.exports = {
    longestRun,
    randomString,
  };
}
