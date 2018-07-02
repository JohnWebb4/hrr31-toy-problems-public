/**
 *
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the
 *  bottom right corner. The robot can move either up, down, left, or right,
 *  but cannot visit the same spot twice. How many possible unique paths are
 *  there to the bottom right corner?
 *
 *  make your solution work for a grid of any size.
 */

/**
 * Board for calculating robot paths
 * @constructs Board
 * @param {number} n Size of the board (nxn)
 */
const makeBoard = function makeBoard(n) {
  const board = [];
  for (let i = 0; i < n; i += 1) {
    board.push([]);
    for (let j = 0; j < n; j += 1) {
      board[i].push(false);
    }
  }

  /**
   * Toggle piece on board
   * @function togglePiece
   * @param {number} i index of x axis
   * @param {number} j index of y axis
   */
  board.togglePiece = function togglePiece(i, j) {
    this[i][j] = !this[i][j];
  };

  /**
   * Determine if a place on board has been visited
   * @function hasBeenVisited
   * @param {number} i index of x axis
   * @param {number} j index of y axis
   * @returns {boolean} If space has been visited
   */
  board.hasBeenVisited = function hasBeenVisited(i, j) {
    return !!this[i][j];
  };
  return board;
};

/**
 * Determine if place on board has been visited
 * @function robotPaths
 * @param {number} n board size,
 * @param {Board} [board=makeBoard(n)] a Board class object,
 * @param {number} [i=0] Robot starting column (from left),
 * @param {number} [j=0] Robot starting row (from top)
 * @return {number} Number of possibilities
 */
const robotPaths = function robotPaths(n, board, i, j) {
  // Termination case
  if (n <= 0) {
    return 0;
  }

  board = board || makeBoard(n);
  i = i || 0;
  j = j || 0;

  // If at end of board
  if (i === n - 1 && j === n - 1) {
    return 1;
  }

  let pathCount = 0;

  board.togglePiece(i, j);

  // Calculate next paths
  const nextPath = [[i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]];

  for (let pathIndex = 0; pathIndex < nextPath.length; pathIndex += 1) {
    // If on board
    if (nextPath[pathIndex][0] >= 0 && nextPath[pathIndex][0] < n &&
       nextPath[pathIndex][1] >= 0 && nextPath[pathIndex][1] < n) {
      // Is has not been visited
      if (!board.hasBeenVisited(nextPath[pathIndex][0], nextPath[pathIndex][1])) {
        pathCount += robotPaths(n, board, nextPath[pathIndex][0], nextPath[pathIndex][1]);
      }
    }
  }

  board.togglePiece(i, j);

  return pathCount;
};

if (window.DEBUG) {
  module.exports = {
    makeBoard,
    robotPaths,
  };
}
