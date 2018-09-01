const updateGameStatus = gameStatus => ({
  gameStatus,
  type: 'UPDATE_GAME_STATUS'
});

const clickCell = (row, col) => ({
  row,
  col,
  type: 'UPDATE_GAME_BOARD'
});

module.exports = { updateGameStatus, clickCell };
