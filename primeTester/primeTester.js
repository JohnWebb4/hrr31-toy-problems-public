/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  if (typeof n !== 'number' || n <= 1 || n % 1 !== 0) {
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }

  var maxArraySize = Number.parseFloat('4e+9');
  var sqrtNRoundedToNearest4Billion = Math.ceil(Math.sqrt(n) / maxArraySize) * maxArraySize;

  var primes = [];

  for (var primeRangeStart = 0; primeRangeStart < sqrtNRoundedToNearest4Billion; primeRangeStart += maxArraySize) {
    if (!primeTestRange(primeRangeStart, primeRangeStart + maxArraySize, n, primes)) {
      return false;
    }
  }
};

var primeTestRange = function(start, end, n, previousPrimesAndPrimesInRange) {
  var isPrimeArray = Array(sqrtN + 2).fill(true);
  isPrimeArray[0] = false;
  isPrimeArray[1] = false;

  var primeNumbers = [];
  for (var maybePrime = 0; maybePrime <= sqrtN; maybePrime++) {
    if (isPrimeArray[maybePrime]) {
      primeNumbers.push(maybePrime);

      setIndeciesThatAreMultiplesOfTheSquareOfNToFalse(isPrimeArray, maybePrime);

      if (n % maybePrime === 0 && n !== maybePrime) {
        return false;
      }
    }
  }

  return true;
}

var setIndeciesThatAreMultiplesOfTheSquareOfNToFalse(array, n) {
  for (var primeSquareMultiple = maybePrime ** 2;
       primeSquareMultiple <= sqrtN;
       primeSquareMultiple += maybePrime) {
    isPrimeArray[primeSquareMultiple] = false;
  }
}

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

var primeSieveFrom2 = function(end) {
  var isPrimeArray = Array(end + 2).fill(true);
  isPrimeArray[0] = false;
  isPrimeArray[1] = false;

  var primeNumbers = [];

  for (var maybePrime = 2; maybePrime <= end; maybePrime++) {
    if (isPrimeArray[maybePrime]) {
      primeNumbers.push(maybePrime);
      for (var primeSquareMultiple = maybePrime ** 2;
           primeSquareMultiple <= end; primeSquareMultiple += maybePrime) {
        isPrimeArray[primeSquareMultiple] = false;
      }
    }
  }

  return primeNumbers;
}

var primeSieve = function (start, end) {
  return primeSieveFrom2(end).filter(function(prime) {
    return prime >= start;
  });
};
