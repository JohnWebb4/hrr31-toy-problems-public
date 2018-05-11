/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
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

var numbersToWords = {
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
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

Number.prototype.toEnglish = function () {
  // Handle negative numbers
  if (this < 0) {
    return 'negative ' + (-this).toEnglish();
  }
  // Define inner function
  var toEnglishLessThanAThousand = function(number) {

  };

  var stringNumber = '';
  // Break every one thousand
  for (var powerOfThousand = 0; powerOfThousand < this; powerOfThousand *= 1000) {
    var nextPowerOfThousand = powerOfThousand * 1000;
    var roundedValueToPower = Math.floor(this / nextPowerOfThousand) * 1000 - Math.floor(this / powerOfThousand);
    stringNumber = stringNumber + ' ' + toEnglishLessThanAThousand(roundedValueToPower);
    if (powerOfThousand >= 1000) {
      stringNumber = stringNumber + ' ' + numbersToPlace[powerOfThousand];
    }
  }
};
