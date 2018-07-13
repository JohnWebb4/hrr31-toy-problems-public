/**
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

const longestRun = function longestRun(string) {
  // TODO: Your code here!
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
const randomString = function randomString(len) {
  let text = '';
  let possible = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < len; i += 1) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

if (window.DEBUG) {
  module.exports = longestRun;
}
