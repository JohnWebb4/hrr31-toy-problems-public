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
let multiply = (x, y) => {
  const isNegative = Boolean((x < 0) ^ (y < 0));

  const absX = Math.abs(x);
  const absY = Math.abs(y);

  let product = 0;
  for (let indexY = 0; indexY < absY; indexY += 1) {
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
let divide = (x, y, decimalPlaces=3) => {
  if (y === 0) {
    return NaN;
  }

  const isNegative = Boolean((x < 0) ^ (y < 0));

  const absX = Math.abs(x);
  const absY = Math.abs(y);

  let quotient = 0;

  while (multiply(absY, quotient) < absX) {
    quotient += 1;
  }

  // If decimals needed
  const closestMultiple = multiply(absY, quotient);
  if ((closestMultiple !== absX) && decimalPlaces > 0) {
    quotient -= 1;
    const closestSmallerMultiple = multiply(absY, quotient);
    const remainder = absX - closestSmallerMultiple;
    quotient = Number(`${quotient}.${divide(multiply(remainder, 10 ** decimalPlaces), absY, 0)}`);
  }

  return isNegative ? -quotient : quotient;
};

let modulo = (x, y) => {
  if (y === 0) {
    return NaN;
  }

  const isNegative = x < 0;

  const absY = Math.abs(y);
  let remainder = Math.abs(x);

  while (remainder >= absY) {
    remainder -= absY;
  }

  return isNegative ? -remainder : remainder;
};
