/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

/**
 * Determine is parenthesis are balanced
 * @param {string} input String to check
 * @returns {boolean} String is valid
 */
const balancedParens = function balancedParens(input) {
  // Holds all closing parenthesis we are looking for (in order)
  // This is a stack
  const lookingForCharArray = [];

  // Holds corresponding closing parenthesis
  const lookupClosingParens = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  // Check char is valid and all parenthesis are
  // closed
  return input.split('').every((char) => {
    // Check char is valid
    // Check closing parenthesis
    if (lookingForCharArray[0] === char) {
      // Is corresponding closing parenthesis
      // Remove from lookup
      lookingForCharArray.shift();
      return true;
    }

    // Else check opening parenthesis
    if (lookupClosingParens[char]) {
      lookingForCharArray.unshift(lookupClosingParens[char]);
      return true;
    }

    // Else check is other character, and not a closing bracket
    return char !== ')' && char !== ']' && char !== '}';
  }) && lookingForCharArray.length === 0;
};

if (window.DEBUG) {
  // If debugging, export balanced parenthesis
  module.exports = balancedParens;
}

