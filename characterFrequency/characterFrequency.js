/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

/*
 *  I: String
 *  O: Array of tuples
 *  C: None
 *  E: Case sensitive? No characters?
 *
 *  Notes:
 *  Descending order by frequency and then ascending order by character
 *
 *  Outline:
 *  Iterate through string
 **   Key character to value in string
 ***     Default one and increment
 *  Declare array
 *  Iterate over object
 **   Iterate over result array
 ***    If object frequency is less than array element frequency splice before
 ***    If equal frequency compare characters
 ***    If greater than element continue
 *  Return result array
*/

const getFrequencyObject = function getFrequencyObject(string) {
  return string.split('').reduce((frequencyTotal, character) => {
    const newTotal = frequencyTotal;
    newTotal[character] = frequencyTotal[character] + 1 || 1;
    return frequencyTotal;
  }, {});
};

const getArrayOfTuplesOfKeyAndValue = function getArrayOfTuplesOfKeyAndValue(object) {
  return Object.entries(object);
};

const sortArray = function sortArray(array, comparator) {
  // Bubble sort
  let changedArray;
  const sortedArray = array.slice();

  const sort = (element, index) => {
    if (index + 1 < sortedArray.length) {
      if (comparator(element, sortedArray[index + 1]) > 0) {
        sortedArray[index] = sortedArray[index + 1];
        sortedArray[index + 1] = element;
        changedArray = true;
      }
    }
  };

  do {
    changedArray = false;

    sortedArray.forEach(sort);
  } while (changedArray);

  return sortedArray;
};

const characterFrequency = function characterFrequency(string) {
  const frequencyObject = getFrequencyObject(string);
  const frequencyArray = getArrayOfTuplesOfKeyAndValue(frequencyObject);
  return sortArray(frequencyArray, (a, b) => {
    if (a[1] > b[1]) {
      return -1;
    } else if (a[1] === b[1]) {
      if (a[0] < b[0]) {
        return -1;
      }
      return 1;
    }
    return 1;
  });
};

if (window.DEBUG) {
  module.exports = characterFrequency;
}
