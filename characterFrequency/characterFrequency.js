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

var characterFrequency = function(string) {
  return result;
};