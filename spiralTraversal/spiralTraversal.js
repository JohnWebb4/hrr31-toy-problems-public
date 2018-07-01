/*
 * Write a function that accepts a 2-dimensional array
 * (that is, an array containing many same-length arrays),
 * and prints out every value found,
 * but in a spiral from the upper left in to the center
 * Please write some form of specs,
 * tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

/* Notes
 * Watch our for 1xn, nx1, 2xn, and nx2

 * Whiteboarding
 * I: 2D array
 * O: 1D array (of traversal)
 * C: None
 * E: Empty array, Non-square size

 * Diaghram
 * Consider [[1]]
 ** Return [1];
 * Consider [[1], [2], [3]]
 ** Return [1, 2, 3]
 * Consider [[1, 2, 3]]
 ** Return [1, 2, 3]

 * Psuedocode
 * Check if empty array and return empty array
 * Check if any element in array is different length or zero
 * Slice first row from matrix and store as spiral traversal
 * Store remained in new matrix
 * Rotate new matrix counter-clockwide 90 deg.
 * Recall spiral traversal and concat to spirarl traversal
 * Return spiral traversal
*/


const rotateArrayCounterClockwise90Deg = matrix => (
  matrix.reduce((rotMatrix, row) => {
    row.reverse().forEach((element, index) => {
      if (rotMatrix[index]) {
        rotMatrix[index].push(element);
      } else {
        rotMatrix[index] = [element];
      }
    });

    return rotMatrix;
  }, [])
);

const spiralTraversal = (matrix) => {
  if (matrix.length === 0) {
    return [];
  } else if (matrix.length === 1) {
    return matrix[0];
  }

  const numColumns = matrix[0].length;

  matrix.forEach((row) => {
    if (row.length === 0 || row.length !== numColumns) {
      throw new RangeError(`Matrix rows must be a non-zero constant size ${JSON.stringify(matrix)}`);
    }
  });

  // Recurse
  const firstRow = matrix.slice(0, 1).reduce((flatenned, row) => (flatenned.concat(row)), []);
  const remainSpiral = spiralTraversal(rotateArrayCounterClockwise90Deg(matrix.slice(1)));

  return firstRow.concat(remainSpiral);
};

if (process.env.DEBUG) {
  module.exports = spiralTraversal;
}
