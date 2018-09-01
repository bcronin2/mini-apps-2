class Cell {
  constructor(hasMine) {
    this.hasMine = hasMine;
    this.isClicked = false;
  }
}

const startGame = (dimension = 10, difficulty = 0.1) => {
  const board = [];
  let freeCells = dimension * dimension;
  for (let i = 0; i < dimension; i++) {
    board.push([]);
    for (let j = 0; j < dimension; j++) {
      const hasMine = Math.random() < difficulty;
      board[i].push(new Cell(hasMine));
      if (hasMine) freeCells--;
    }
  }
  getNeighbors(board);
  return { board, freeCells, lost: false };
};

const getNeighbors = board => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      getNeighborsForCell(board, i, j);
    }
  }
};

const getNeighborsForCell = (board, row, col) => {
  let neighbors = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (board[row + i] && board[row + i][col + j] && board[row + i][col + j].hasMine) {
        neighbors++;
      }
    }
  }
  board[row][col].neighbors = neighbors;
};

const clickCell = ({ board, freeCells, lost }, row, col) => {
  const cell = board[row][col];
  cell.isClicked = true;
  if (cell.hasMine) {
    return { board, freeCells, lost: true };
  }
  freeCells--;
  return { board, freeCells, lost };
};

module.exports = { startGame, clickCell };
