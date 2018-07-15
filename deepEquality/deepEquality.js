/*
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
 */

/**
 * Test two objects for deep equality
 * @param {*} apple Object to test
 * @param {*} orange Object to test
 * @returns {boolean} Objects deep equal
 */
const deepEquals = function deepEquals(apple, orange) {
  // Test have same keys
  // Get all keys
  const appleKeys = Object.keys(apple);
  const orangeKeys = Object.keys(orange);
  const allKeys = appleKeys.concat(orangeKeys);

  const uniqueKeys = allKeys.filter(key => !appleKeys.includes(key) || !orangeKeys.includes(key));

  if (uniqueKeys.length > 0) {
    // Has a unique key
    // Does not deep equal
    return false;
  }

  // Have same keys
  // Compare each key
  return appleKeys.every((key) => {
    if (
      typeof apple[key] === 'object'
      && typeof orange[key] === 'object'
      && apple[key] !== null
      && orange[key] !== null
    ) {
      // Object
      // Compare with deep equals
      return deepEquals(apple[key], orange[key]);
    }

    // Is primative
    // Return equality
    return apple[key] === orange[key];
  });
};

if (window.DEBUG) {
  module.exports = deepEquals;
}
