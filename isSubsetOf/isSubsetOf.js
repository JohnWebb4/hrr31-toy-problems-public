/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

/**
 * Compare objects for deep equality
 * @param {Object} obj1 Object to compare
 * @param {Object} obj2 Object to compare
 */
const deepEqualObjects = (obj1, obj2) => {
  // Get keys
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  // Test no unique keys
  const uniqueKeys = obj1Keys.filter(key => obj2Keys.indexOf(key) === -1);
  if (uniqueKeys.length > 0) {
    return false;
  }

  // No unique keys
  // Iterate through keys
  return obj1Keys.every((key) => {
    // Should be same value type
    const valueType = typeof obj1[key];
    const obj2Type = typeof obj2[key];
    if (valueType !== obj2Type) {
      // Values are different
      return false;
    }

    // Compare values
    const value1 = obj1[key];
    const value2 = obj2[key];
    if (Array.isArray(value1)) {
      // Is array
      if (!Array.isArray(value2)) {
        // Is not an array
        return false;
      }

      // Compare for equality
      // If a is subset of b,
      // and b is subset of a,
      // then a === b
      return value1.isSubsetOf(value2) && value2.isSubsetOf(value1);
    } else if (valueType === 'object') {
      // Is object
      // Compare deep equal objects
      return deepEqualObjects(value1, value2);
    }

    // Compare primatives
    return value1 === value2;
  });
};

/**
 * Determine if array is subset of another array
 * @param {[*]} arr Parent array to test against
 * @returns {boolean} Is subset of given array
 */
Array.prototype.isSubsetOf = function isSubsetOf(arr) {
  // Testing an empty array should return false
  // A subset must have elements in common
  // An empty array has no elements, so none in common.
  if (this.length === 0) {
    return false;
  }

  return this.every((elem) => {
    // Iterate through each element in subset
    if (Array.isArray(elem)) {
      // Element is array
      // Compare all elements of parent
      // If one is match then continue
      return arr.some(arrElem => elem.isSubsetOf(arrElem) && arrElem.isSubsetOf(elem));
    } else if (typeof elem === 'object') {
      // Compare objects for deep equality
      return arr.some(arrElem => deepEqualObjects(elem, arrElem));
    }

    // Is primative, return index of
    return arr.indexOf(elem) !== -1;
  });
};

if (window.DEBUG) {
  // Debugging, export code
  module.exports = Array.prototype.isSubsetOf;
}
