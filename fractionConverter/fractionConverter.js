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
 * @param {number} [maxPlaces=10] The maximum number of decimal places to handle
 * @returns {string} Fraction equivalent
 */
const toFraction = function toFraction(number, maxPlaces) {
  // Default max places
  maxPlaces = maxPlaces || 7;

  if (number < 0) {
    // If negative add negative sign
    return '-' + toFraction(-number);
  }
  // Get smallest multiple of 10 that is whole number
  // Store smallest multiple of 10
  let dividend = number;
  // Store multipler to get to smallest Multiple
  let divisor = 1;

  let wholeUpCount = 0;

  while (Math.floor(dividend) !== dividend && wholeUpCount < maxPlaces) {
    dividend *= 10;
    divisor *= 10;

    wholeUpCount += 1;
  }

  // Avoid floating point error
  dividend = Math.floor(dividend);

  // Get the smallest number (dividend or divisor)
  const smallest = Math.min(dividend, divisor);

  if (dividend % smallest === 0 && divisor % smallest === 0) {
    // Can divide by smallest
    dividend /= smallest;
    divisor /= smallest;
  }

  // Get square of smallest
  const halfSmallest = Math.ceil(smallest / 2);

  // Create range from 2 to half smallest (inclusively)
  // Values are whether or not the factor should be checked
  const factors = Array.from({ length: halfSmallest - 1 }, () => true);

  for (let factorIndex = 0; factorIndex < factors.length; factorIndex += 1) {
    // If could be a factor
    if (factors[factorIndex]) {
      // Get factor
      const factor = factorIndex + 2;

      // Test each number for being a factor of dividend and divisor
      while (dividend % factor === 0 && divisor % factor === 0) {
        // Divide dividend and divisor by factor
        dividend /= factor;
        divisor /= factor;
      }

      // Remove all multiples of factor
      // Get number of factors till half smallest
      const numFactors = Math.floor(halfSmallest / factor);
      for (let factMultpier = 1; factMultpier < numFactors; factMultpier += 1) {
        // Set as not a factor
        factors[(factor * factMultpier) - 2] = false;
      }
    }
  }

  // Return fraction
  return `${dividend}/${divisor}`;
};

if (window.DEBUG) {
  // If debugging, export to fractions
  module.exports = toFraction;
}
