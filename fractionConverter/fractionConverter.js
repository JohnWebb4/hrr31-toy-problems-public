/*
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

/**
 * Convert decimal to fraction
 * @param {number} number Decimal number to convert
 * @returns {string} Fraction equivalent
 */
const toFraction = function toFraction(number) {
  // Get smallest multiple of 10 that is whole number
  // Store smallest multiple of 10
  let dividend = number;
  // Store multipler to get to smallest Multiple
  let divisor = 1;

  while (Math.floor(dividend) !== dividend) {
    divisor *= 10;
    dividend *= 10;
  }

  // Get smallest number between dividend divisor
  const smallest = Math.min(dividend, divisor);

  for (let factor = smallest; factor > 1; factor -= 1) {
    // Test each number for being a factor of dividend and divisor
    if (dividend % factor === 0 && divisor % factor === 0) {
      // Divide dividend and divisor by factor
      dividend /= factor;
      divisor /= factor;
    }
  }

  // Return fraction
  return `${dividend}/${divisor}`;
};

if (window.DEBUG) {
  // If debugging, export to fractions
  module.exports = toFraction;
}
