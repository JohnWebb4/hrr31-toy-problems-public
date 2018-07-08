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
  const set = [];

  // Go through each character
  string.split('').forEach((char) => {
    // If not in set
    if (set.indexOf(char) === -1) {
      set.push(char);
      return;
    }

    // Is repeated character, remove
    // Get index and remove
    const charIndex = set.indexOf(char);
    set.splice(charIndex, charIndex + 1);
  });

  // Return first character or empty string
  return set[0] || '';
};

if (window.DEBUG) {
  module.exports = firstNonRepeatedCharacter;
}
