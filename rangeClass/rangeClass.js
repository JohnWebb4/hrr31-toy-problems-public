/* eslint for-direction: 0 */
/*
 * Build a class to represent a range of numbers that takes:
 *   - a beginning index,
 *   - an end index (optional)
 *     If there is no end index, the range should include only the passed-in start value.
 *   - a 'step' (optional)
 *     The step is the interval at which elements are included.
 *     For instance, a step of 1 includes every element in the range,
 *     while a step of 2 includes every other element.
 *
 * The range should have a constructor that accepts these arguments in that order.
 *
 * It should also support the following utility functions:
 *   - size(): return the number of items represented by the range
 *   - each(callback(index)): iterate over the range, passing each value to a callback function
 *   - includes(index): return whether or not the range includes the passed value
 *
 * You should also be aware of the following caveats:
 *   - You should allow a negative value for 'step' to count backwards.
 *   - If no step is provided, it should default to 1.
 *   - If the start value is greater than the end value, assume we're counting backwards.
 *   - Should return null if we are given no 'start' value.
 *
 * Range should use constant space, even during the `each` method. i.e. you should *not*
 * use an Array as backing storage. Any given range could potentially be thousands of numbers long,
 * so find a way to represent the range without actually storing each element.
 *
 * USAGE EXAMPLES:
 * var myRange = new Range(0,10);
 * // a new range representing the numbers between 0 and 10 (inclusively)
 *
 * var evenNumbers = new Range(2,8,2); // A range with the even numbers 2, 4, 6, and 8.
 * evenNumbers.each(function(val){
 *   console.log(val+"!");
 * });
 * console.log("Who do we appreciate!?");
 *
 * evenNumbers.size() should be 4
 * evenNumbers.includes(2) should be true, evenNumbers.includes(3) should be false
 */


/**
 * Create a range class
 * @param {number} start index
 * @param {number} [end=start] End index
 * @param {number} [step=1] Step between range values
 */
const Range = function Range(start, end, step) {
  if (!start) {
    // Returning null is impossible in construction mode,
    // but returning null stops construction
    return null;
  }

  if (this.step === 0) {
    throw new Error('Range step cannot be zero');
  }

  this.start = start;

  // Must use ternary to allow end to be zero
  this.end = end !== undefined ? end : start;


  if (this.start <= this.end) {
    // Default step
    this.step = step || 1;
  } else {
    // Make negative and default to -1
    this.step = -Math.abs(step) || -1;
  }
};

/**
 * Get size of range
 * @returns {number} Size of range
 */
Range.prototype.size = function size() {
  let counter = 0;

  // loop through range
  this.each(() => {
    // Increment counter on each value in range
    counter += 1;
  });

  return counter;
};

/**
 * Iterate through each element in range
 * @param {(val: *) => undefined} callback Callback function accepting value
 */
Range.prototype.each = function each(callback) {
  if (this.step === 0) {
    // Cannot loop. Throw error
    throw new Error('Step cannot be zero');
  }

  if (this.step < 0) {
    // Negative step. Count backwards
    for (let value = this.start; value >= this.end; value += this.step) {
      // Call on value
      callback(value);
    }
    return;
  }

  for (let value = this.start; value <= this.end; value += this.step) {
    // Call on value
    callback(value);
  }
};

/**
 * Check if range includes value
 * @param {*} val Value to check
 */
Range.prototype.includes = function includes(val) {
  let doesInclude = false;

  this.each((rangeValue) => {
    // Iterate through range values, and check if matches
    doesInclude = doesInclude || val === rangeValue;
  });

  return doesInclude;
};

/*
 * Create range
 */
// const range = new Range(1);

if (window.DEBUG) {
  // If debugging, export Range class
  module.exports = Range;
}
