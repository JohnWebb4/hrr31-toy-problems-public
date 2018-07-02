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

/**
 * @type {Array} Strings of value
 */
const rockPaperScissorsArray = ['rock', 'paper', 'scissors'];

/**
 * Get all possibilities for x rounds of rock, paper, scissors
 * @param {*} [numRounds=3] Number of rounds
 */
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

if (window.DEBUG) {
  module.exports = rockPaperScissors;
}
