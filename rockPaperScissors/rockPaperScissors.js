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

// Input: number of rounds
// Output: Every possible combination

// Options: 'rock', 'paper', 'scissors'
// Array of length 3^n of arrays of n length


var rockPaperScissors = function (numRounds) {
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

    roundIndexChoices = incrementAbacusArray(roundIndexChoices, numChoices);
  }

  return arrayRounds;
};

var incrementAbacusArray = function(array, maxValue) {

};