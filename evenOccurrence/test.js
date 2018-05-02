// Tests for occurances

// Should return null for empty array
testEvenOccuranceEquals([], null, 'Should handle empty array');

// Should return null if no even occurances
testEvenOccuranceEquals([1, 2, 3], null, 'Should handle no even occurances');

// Should return even occurance
testEvenOccuranceEquals([1, 2, 1, 3], 1, 'Should return even occurance (1)');

// Should handle multiple even occurances
testEvenOccuranceEquals([1, 2, 1, 2, 3, 3], 'Should return first even occurance');

function testEvenOccuranceEquals(arr, value, errorMessage) {
  if (evenOccurrence(arr) !== value) {
    console.log(errorMessage);
  }
}