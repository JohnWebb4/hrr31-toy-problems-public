/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

// Input:    Number of rounds
// Output:   Every possible combination

// Options: 'rock', 'paper', 'scissors'
// Array of length 3^n of arrays of n length


var rockPaperScissors = function (numRounds) {
  numRounds = numRounds || 3;

  var possibleChoices = ['rock', 'paper', 'scissors'];
  var roundIndexChoices = Array(numRounds).fill(0);

  var arrayRounds = [];

  var numChoices = 3;
  var numCombinations = numChoices ** numRounds;

  for (var combinationIndex = 0; combinationIndex < numCombinations; combinationIndex++) {
    var roundChoices = roundIndexChoices.map(function(choiceIndex) {
      return possibleChoices[choiceIndex];
    });

    arrayRounds.push(roundChoices);

    roundIndexChoices = incrementAbacusArray(roundIndexChoices, 1, numChoices);
  }

  return arrayRounds;
};

// Abacus: Has max number of beads on each row
//         Each subsequent row is multiple of previous row
//           For abacus with 10 beads, each bead on the 2nd row reprents 10
// Input:  Array, increment value, max value for each element
// Output: Updated abacus array

// Loop through array
// Increment very last index by 1
// Do what follow for every other index
// Set increment for next row to lowest integer value that index divides max value
// Set new abacus value to remainder of division

var incrementAbacusArray = function(array, incrementBy, maxValue) {
  return (array.reverse().map(function(value) {
    value += incrementBy;
    incrementBy = Math.floor(value / maxValue);
    return value % maxValue;
  })).reverse();
};