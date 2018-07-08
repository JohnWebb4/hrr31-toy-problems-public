/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */

/**
 * Returns the nth Fibonacci number
 * @param {number} n The index of the Fibonacci sequence
 * @returns {number} nth Fibonacci number
 */
const nthFibonacci = function nthFibonacci(n) {
  // Handle termination vase
  if (typeof n !== 'number' || n < 0) {
    // Not a number of less than zero
    return undefined;
  }

  // Handle base cases
  if (n === 0) {
    return 0;
  }

  if (n === 1 || n === 2) {
    return 1;
  }

  // Recursive case
  // Fibonacci is sum of two previous
  return nthFibonacci(n - 1) + nthFibonacci(n - 2);
};

if (window.DEBUG) {
  module.exports = nthFibonacci;
}
