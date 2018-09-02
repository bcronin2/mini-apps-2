let board = [];
let freeCells = 0;

const makeCell = hasMine => ({
  hasMine,
  isClicked: false
});

const clearAdjacentCells = (board, row, col) => {
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (board[row + i] && board[row + i][col + j]) {
        if (!board[row + i][col + j].isClicked) {
          board[row + i][col + j].isClicked = true;
          freeCells--;
          if (board[row + i][col + j].neighbors === 0) {
            console.log('clearing cells at', row + i, col + j);
            clearAdjacentCells(board, row + i, col + j);
          }
        }
      }
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

const getNeighbors = board => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      getNeighborsForCell(board, i, j);
    }
  }
};

const startGame = (dimension = 10, difficulty = 0.1) => {
  board = [];
  freeCells = dimension * dimension;
  for (let i = 0; i < dimension; i++) {
    board.push([]);
    for (let j = 0; j < dimension; j++) {
      const hasMine = Math.random() < difficulty;
      board[i].push(makeCell(hasMine));
      if (hasMine) freeCells--;
    }
  }
  getNeighbors(board);
  return { board, freeCells, lost: false };
};

const clickCell = ({ board }, row, col) => {
  const cell = board[row][col];
  if (cell.isClicked) return { board, freeCells, lost: false };
  cell.isClicked = true;
  if (cell.hasMine) {
    return { board, freeCells, lost: true };
  } else if (cell.neighbors > 0) {
    freeCells--;
  } else {
    clearAdjacentCells(board, row, col);
  }
  return { board, freeCells, lost: false };
};

export { startGame, clickCell };
