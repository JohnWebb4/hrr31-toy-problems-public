/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


/**
 * Get larges of any three numbers in array
 * @param {number[]} array Array of numbers
 * @returns {number} The largest product of any three numbers in array
 */
const largestProductOfThree = function largestProductOfThree(array) {
  // Defined the largest product
  let largestProduct;

  // Compare the largest product to zero
  // And update product if less than zero
  const compareLargestProductToZero = () => {
    largestProduct = largestProduct > 0 ? largestProduct : 0;
  };

  array.forEach((number, index) => {
    if (number === 0) {
      // Product of zero is always zero
      // Check it greater than largest product and return
      compareLargestProductToZero();
      return;
    }

    // Iterate through all numbers
    const array1 = array.slice(index + 1);
    array1.forEach((number1, index1) => {
      if (number1 === 0) {
        // Product of zero is always zero
        // Check it greater than largest product and return
        compareLargestProductToZero();
        return;
      }
      // Iterage through all numbers except first
      const array2 = array1.slice(index1 + 1);
      array2.forEach((number2) => {
        if (number2 === 0) {
          // Product of zero is always zero
          // Check it greater than largest product and return
          compareLargestProductToZero();
          return;
        }

        // Get current product
        const currentProduct = number * number1 * number2;

        if (largestProduct === undefined) {
          // First run, assign to current product
          largestProduct = currentProduct;
        }

        if (currentProduct > largestProduct) {
          // Current product is greater than largest product
          // Update largest product
          largestProduct = currentProduct;
        }
      });
    });
  });

  return largestProduct;
};

if (window.DEBUG) {
  // If debugging export largest product of three
  module.exports = largestProductOfThree;
}
