const updateGameStatus = gameStatus => ({
  gameStatus,
  type: 'UPDATE_GAME_STATUS'
});

const updateGameBoard = gameBoard => ({
  gameBoard,
  type: 'UPDATE_GAME_BOARD'
});

module.exports = { updateGameStatus, updateGameBoard };
