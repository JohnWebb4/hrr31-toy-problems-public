/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

/* Notes:
 * - Decision Tree
 * - Recursion
 *
 * Whiteboarding
 * I: string
 * O: array of all anagrams of string
 * C: Cannot use uniq()
 * E: Empty string. Multiple occurences of the same letter.
 *
 * Breakdown
 * If empty string return empty string
 * If one character return array of that character
 * Otherwise, recursion
 * Declare array of all anagrams
 * Split string into characters and iterate over
 ** Create new string with current iterated character removed
 ** Recuse allAnagrams with smaller string and store result
 ** Prepend iterated character to result of recursion
 ** Add to array of all anagrams
 * Return result
*/


// Time Complexity:
var allAnagrams = function(string) {
  if (string === '') {
    return [];
  } else if (string.length === 1) {
    return [string];
  }

  // Recursion
  var anagrams = [];
  var prevCharacters = [];

  for (var charIndex = 0; charIndex < string.length; charIndex++) {
    var char = string[charIndex];

    if (!prevCharacters.includes(char)) {
      var stringLessChar = string.slice(0, charIndex) + string.slice(charIndex + 1);

      var someAnagramsLessChar = allAnagrams(stringLessChar);
      var someAnagrams = someAnagramsLessChar.map(function(anagram) {
        return char + anagram;
      });

      anagrams = anagrams.concat(someAnagrams);
      prevCharacters.push(char);
    }
  }

  return anagrams;
};
