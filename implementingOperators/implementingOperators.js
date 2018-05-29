// Implement multiply, divide, and modulo using only the addition and
// subtraction operators. start off my assuming all inputs are integers
//
// Step 2: Make divide produce answers to three decimal places
// (e.g. 2/3 => 0.667).
//
// Extra credit: Make multiply work with decimals
// (e.g. multiply(2.5, 10.2)
//
// Terror mode: Re-implement all three functions using only bitwise operators.

/* Whiteboarding
 * I: Two numbers
 * O: One Number (product)
 * C: None
 * E: One number is zero, Negative numbers
*/
var multiply = function(x, y) {
  var isNegative = Boolean((x < 0) ^ (y < 0));

  var absX = Math.abs(x);
  var absY = Math.abs(y);

  var product = 0;
  for (var indexY = 0; indexY < absY; indexY++) {
    product += absX;
  }

  return isNegative ? -product : product;
};

/* Whitebaording
 * I: Two numbers
 * O: One number (quotient)
 * C: None
 * E: Negative numbers, and divide by zero
*/
var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  }

  var isNegative = Boolean((x < 0) ^ (y < 0));

  var absX = Math.abs(x);
  var absY = Math.abs(y);

  var quotient;
  for (quotient = 0; multiply(absY, quotient) < absX; quotient++) {}

  return isNegative ? -quotient : quotient;
};

var modulo = function(x, y) {
};


