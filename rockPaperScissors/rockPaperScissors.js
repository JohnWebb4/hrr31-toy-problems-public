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

const rockPaperScissorsArray = ['rock', 'paper', 'scissors'];

const rockPaperScissors = function rockPaperScissors(numRounds = 3) {
  if (numRounds <= 0) {
    return [];
  }

  if (numRounds === 1) {
    return rockPaperScissorsArray.map(hand => [hand]);
  }

  const prevResults = rockPaperScissors(numRounds - 1);

  const results = [];

  rockPaperScissorsArray.forEach((hand) => {
    prevResults.forEach((prevResult) => {
      const result = prevResult.slice();
      result.unshift(hand);
      results.push(result);
    });
  });

  return results;
};

module.exports = rockPaperScissors;
