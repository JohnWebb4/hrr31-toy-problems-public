
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

/**
 * @type {Object} Roman numeral keys to values
 */
const DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 * Translate roman numeral to number
 * @param {string} romanNumeral Roman numeral to translate
 * @returns {number} Number equivalent
 */
const translateRomanNumeral = (romanNumeral) => {
  if (typeof romanNumeral !== 'string') {
    return null;
  }

  let prevNumeral;

  return (romanNumeral.split('')).reverse().reduce((sum, char) => {
    let value = 0;

    if (!prevNumeral || DIGIT_VALUES[char] >= DIGIT_VALUES[prevNumeral]) {
      value = DIGIT_VALUES[char] || 0;
    } else {
      value = -DIGIT_VALUES[char] || 0;
    }

    prevNumeral = char;
    return sum + value;
  }, 0);
};

module.exports = translateRomanNumeral;
