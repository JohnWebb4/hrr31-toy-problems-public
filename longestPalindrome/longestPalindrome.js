/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

/* Notes
 * Go through each character
 * Compare immediately before and after are the same
 ** If not move on
 ** If so checking until characters don't match
 ** Check size agains current largest palindrome and update accordingly

 * Whiteboarding
 * I: String (words separated by space(s))
 * O: String (longest palindrome) (includes spaces)
 * C: None
 * E: Empty string

 * Create string to store longest palindrome
 * Loop through each character in input string
 * Use while loop till characters do not match
 ** Compare characters immediately before and after character for equality
 ** If equal continue
 *** Increment and compare next character before and after
 ** If not equal break loop
 *** Compare size with current longest palindrome
 *** If greater set longest palindrome to current palindrome
 * Return longest palindrome
*/

let longestPalindrome = (sentence) => {
  let theLongestPalindrome = '';

  sentence.split('').forEach((char, charIndex) => {
    let palindromeBegin = charIndex;
    let palindromeEnd = charIndex;
    let isPalindrome = false;

    if (sentence[palindromeBegin - 1] === sentence[palindromeEnd + 1]) {
      // Odd length palindrome
      palindromeBegin -= 1;
      palindromeEnd += 1;

      isPalindrome = true;
    } else if (sentence[palindromeBegin] === sentence[palindromeEnd + 1]) {
      // Even length palindrome
      palindromeEnd += 1;

      isPalindrome = true;
    }

    if (isPalindrome) {
      while (sentence[palindromeBegin - 1] === sentence[palindromeEnd + 1] &&
        palindromeBegin - 1 >= 0 && palindromeEnd + 1 < sentence.length) {
        palindromeBegin -= 1;
        palindromeEnd += 1;
      }

      const palindrome = sentence.slice(palindromeBegin, palindromeEnd + 1);

      if (palindrome.length > theLongestPalindrome.length) {
        theLongestPalindrome = palindrome;
      }
    }
  });

  return theLongestPalindrome;
};
