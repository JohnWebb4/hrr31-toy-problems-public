/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish();
  // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish()
  // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

/* Whiteboarding
 * I: No arguments. Context this is Number object
 * O: String english equivalent
 * C: None
 * E: Decimals, Numbers ending repeat every power of 1,000 (10,000 => ten + thousand), 11 - 19
 *
 * Break every power of thousand 100,555 => 100*10^3 + 555
 * Call function to convert anything less than 1,000
 ** Break apart on powers of ten
 ** Convert 100 + 50 + 5 => One hundred fifty five
 ** Loop through numbers and convert
 ** If number is 10 then combine with next number and return result (10 + 1 => 11 => eleven)
 ** return total result
 * Take result of inner function and add appropriate place (100,000 => one hundred + thousand)
*/

const numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
const numbersToPlace = {
  1: '',
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

function toEnglish() {
  // Handle negative numbers
  if (this < 0) {
    return `negative ${(-this).toEnglish()}`;
  }

  const reverseStringNumber = this.toString().split('').reverse().join('')
    .match(/\d{1,3}/g);
  const arrayNumber = reverseStringNumber.map(stringDigits => stringDigits.split('').reverse());

  let stringEnglish = '';
  let place = 1;


  const toEnglishIfNotZero = function toEnglishIfNotZero(digit) {
    if (digit.match(/^0*$/g)) {
      return '';
    }

    return numbersToWords[digit];
  };

  const lessThanAHundredToEnglish = function lessThanAHundredToEnglish(arrayDigits) {
    // If double digits
    if (arrayDigits.length === 2) {
      if (arrayDigits[0] === '1') {
        return toEnglishIfNotZero(arrayDigits.join(''));
      }

      const tensDigit = toEnglishIfNotZero(`${arrayDigits[0]}0`);
      const onesDigit = toEnglishIfNotZero(arrayDigits[arrayDigits.length - 1]);

      if (tensDigit && onesDigit) {
        return `${tensDigit}-${onesDigit}`;
      }

      return tensDigit + onesDigit;
    }
    return numbersToWords[arrayDigits[0]];
  };

  const lessThanAThousandToEnglish = function lessThanAThousandToEnglish(arrayDigits) {
    let thousandsEnglish = '';

    if (arrayDigits.length === 3) {
      const resultEnglishHundreds = lessThanAHundredToEnglish(arrayDigits.slice(0, 1));
      if (resultEnglishHundreds !== numbersToWords[0]) {
        thousandsEnglish += `${resultEnglishHundreds} ${numbersToPlace[100]}`;
      }
    }

    thousandsEnglish += thousandsEnglish && lessThanAHundredToEnglish(arrayDigits.slice(-2)) ? ' ' : '';
    thousandsEnglish += lessThanAHundredToEnglish(arrayDigits.slice(-2));

    return thousandsEnglish;
  };

  arrayNumber.forEach((threeDigits) => {
    const thousandsEnglish = lessThanAThousandToEnglish(threeDigits);
    if (thousandsEnglish) {
      if (numbersToPlace[place]) {
        if (stringEnglish) {
          stringEnglish = ` ${numbersToPlace[place]} ${stringEnglish}`;
        } else {
          stringEnglish = ` ${numbersToPlace[place]}`;
        }
      }
      stringEnglish = thousandsEnglish + stringEnglish;
    }

    // Finally
    place *= 1000;
  });

  return stringEnglish;
}

Number.prototype.toEnglish = toEnglish;

if (module) {
  module.exports = toEnglish;
}
