const clickCell = (row, col) => ({
  row,
  col,
  type: 'CLICK_CELL'
});

const startNewGame = () => ({
  type: 'NEW_GAME'
});

export { clickCell, startNewGame };
