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
 * @param {Board} board a Board class object,
 * @param {number} i Robot starting column (from left),
 * @param {number} j Robot starting row (from top)
 * @return {number} Number of possibilities
 */
const robotPaths = function robotPaths(n, board, i, j) {
  // Termination case
  if (n <= 0) {
    return 0;
  }

  // If at end of board
  if (i === n - 1 && j === n - 1) {
    return 1;
  }

  let pathCount = 0;

  board.togglePiece(i, j);

  // Calculate next paths
  const nextPath = [[i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]];

  nextPath.forEach(([nextI, nextJ]) => {
    // If on board
    if (nextI >= 0 && nextI < n && nextJ >= 0 && nextJ < n) {
      // Is has not been visited
      if (!board.hasBeenVisited(nextI, nextJ)) {
        pathCount += robotPaths(n, board, nextI, nextJ);
      }
    }
  });

  board.togglePiece(i, j);

  return pathCount;
};

if (process.env.DEBUG) {
  module.exports = {
    makeBoard,
    robotPaths,
  };
}
