/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

const primeTester = (n) => {
  if (typeof n !== 'number' || n <= 1 || n % 1 !== 0) {
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }

  if (n === 2) {
    return true;
  }

  const sqrtN = Math.ceil(Math.sqrt(n));

  for (let maybePrime = 2; maybePrime <= sqrtN; maybePrime += 1) {
    if (n % maybePrime === 0) {
      return false;
    }
  }

  return true;
};


/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

const primeSieveFrom2 = (end) => {
  const isPrimeArray = Array(end + 2).fill(true);
  isPrimeArray[0] = false;
  isPrimeArray[1] = false;

  const primeNumbers = [];

  for (let maybePrime = 2; maybePrime <= end; maybePrime += 1) {
    if (isPrimeArray[maybePrime]) {
      primeNumbers.push(maybePrime);
      for (let primeSquareMultiple = maybePrime ** 2;
        primeSquareMultiple <= end; primeSquareMultiple += maybePrime) {
        isPrimeArray[primeSquareMultiple] = false;
      }
    }
  }

  return primeNumbers;
};

const primeSieve = (start, end) => (
  primeSieveFrom2(end).filter(prime => prime >= start)
);

module.exports.primeTester = primeTester;
module.exports.primeSieve = primeSieve;
