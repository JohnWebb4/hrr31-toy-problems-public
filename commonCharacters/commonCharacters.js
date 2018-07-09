/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */


/**
 * Get common characters between strings
 * @param {...string} strings Strings to compare
 */
const commonCharacters = function commonCharacters() {
  // Get all strings
  const strings = Array.from(arguments);

  if (strings.length === 0) {
    return '';
  }

  const string1 = strings[0];

  // Return unique common characters
  return string1.split('').filter((char, index) => (
    strings.every((string) => {
      // Test string for common character
      if (string.indexOf(char) >= 0) {
        // Has character in common
        if (string1.indexOf(char) === index) {
          // Character is unique
          return true;
        }
      }

      // Character is not in common or not unique
      return false;
    })
  )).join('');
};

if (window.DEBUG) {
  module.exports = commonCharacters;
}
