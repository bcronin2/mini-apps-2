const clickCell = (row, col) => ({
  row,
  col,
  type: 'CLICK_CELL'
});

const flagCell = (row, col) => ({
  row,
  col,
  type: 'FLAG_CELL'
});

const startNewGame = () => ({
  type: 'NEW_GAME'
});

export { clickCell, flagCell, startNewGame };
