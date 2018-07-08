/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

/**
 * Return first non repeated character in string
 * @param {string} string String to find first non repeated character
 * @returns {string} First non-repeated character
 */
const firstNonRepeatedCharacter = function firstNonRepeatedCharacter(string) {
  // hold all non-repeated characters
  const unique = [];
  const set = [];

  // Go through each character
  string.split('').forEach((char) => {
    // If not in set
    if (set.indexOf(char) === -1) {
      set.push(char);
      unique.push(char);
      return;
    }

    if (unique.indexOf(char) !== -1) {
      // Is repeated character, remove
      // Get index and remove
      const charIndex = unique.indexOf(char);
      unique.splice(charIndex, charIndex + 1);
    }
  });

  // Return first character or empty string
  return unique[0] || null;
};

if (window.DEBUG) {
  module.exports = firstNonRepeatedCharacter;
}
