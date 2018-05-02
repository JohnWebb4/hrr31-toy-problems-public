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
// Key number value and store another object with lowest index and if occured an even number of times


var evenOccurrence = function(arr) {
  var valueFirstEvenOccurence = null;
  var indexFirstEvenOccurence = arr.length;

  var countOccurances = arr.reduce(function(occurances, number, index) {
    if (occurances[number]) {
      occurances[number][isEvenOccurance] = !occurances[number][isEvenOccurance];

      var isEvenOccurance = occurances[number][isEvenOccurance];
      var firstIndex = occurances[number][firstIndex];

      if (isEvenOccurance && firstIndex < indexFirstEvenOccurence) {
        valueFirstOccurance = number;
        indexFirstEvenOccurence = firstIndex;
      }

      if (number === valueFirstOccurance && !isEvenOccurance) {
       valueFirstOccurance = null;
       indexFirstEvenOccurence = arr.length;
      }

    } else {
      occurances[number] = {
        firstIndex: index,
        isEvenOccurance: false
      };
    }

    return occurances;
  }, {});

  return valueFirstEvenOccurence;
};
