/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

// Input: Array
// Output: First number to occur even number of times

// Iterate through array
// Store first index of number
// Store number of occurances of number
// Iterate through number results
// Store value of number with lowest index and occurs an even number of times
// Return value

// Reduce array to object
// Key number value and store another object with lowest index,
// and if occured an even number of times


const evenOccurrence = (arr) => {
  let valueFirstEvenOccurence = null;
  let indexFirstEvenOccurence = arr.length;

  arr.reduce((occurances, number, index) => {
    const tempOccurances = Object.assign({}, occurances);
    if (tempOccurances[number]) {
      tempOccurances[number].isEvenOccurance = !tempOccurances[number].isEvenOccurance;

      const { isEvenOccurance, firstIndex } = tempOccurances[number];

      if (isEvenOccurance && firstIndex < indexFirstEvenOccurence) {
        valueFirstEvenOccurence = number;
        indexFirstEvenOccurence = firstIndex;
      }

      if (number === valueFirstEvenOccurence && !isEvenOccurance) {
        valueFirstEvenOccurence = null;
        indexFirstEvenOccurence = arr.length;
      }
    } else {
      tempOccurances[number] = {
        firstIndex: index,
        isEvenOccurance: false,
      };
    }

    return tempOccurances;
  }, {});

  return valueFirstEvenOccurence;
};

module.exports = evenOccurrence;

