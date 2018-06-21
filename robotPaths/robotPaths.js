/**
 *
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the
 *  bottom right corner. The robot can move either up, down, left, or right,
 *  but cannot visit the same spot twice. How many possible unique paths are
 *  there to the bottom right corner?
 *
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

const makeBoard = function makeBoard(n) {
  const board = [];
  for (let i = 0; i < n; i += 1) {
    board.push([]);
    for (let j = 0; j < n; j += 1) {
      board[i].push(false);
    }
  }
  board.togglePiece = function togglePiece(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function hasBeenVisited(i, j) {
    return !!this[i][j];
  };
  return board;
};

/* Whiteboarding
 * O: Number of possibilities
 * I: N: board size,
 * board: a Board class object,
 * i: Robot starting column (from left),
 * j: Robot starting row (from top)
 * C: None
 * E: None

 * Approach
 * Search Tree
 */
const robotPaths = function robotPaths(n, board, i, j) {
  let pathCount = 0;

  // Termination case
  if (n <= 0) {
    return 0;
  }

  if (!board.hasBeenVisited(i, j)) {
    board.togglePiece(i, j);
  }

  // Try all combos
  pathCount += robotPaths(n - 1, board, i + 1, j);

  return pathCount;
};

try {
  module.exports.makeBoard = makeBoard;
  module.exports.robotPaths = robotPaths;
} catch (e) {
  // Loading webpage, ignore
}
