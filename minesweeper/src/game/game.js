const makeCell = hasMine => ({
  hasMine,
  isClicked: false
});

const getNeighborsForCell = (board, row, col) => {
  let neighbors = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (board[row + i] && board[row + i][col + j] && board[row + i][col + j].hasMine) {
        neighbors++;
      }
    }
  }
  return neighbors;
};

const countNeighbors = board => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      board[i][j].neighbors = getNeighborsForCell(board, i, j);
    }
  }
  return board;
};

const clearAdjacentCells = (board, row, col) => {
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (board[row + i] && board[row + i][col + j]) {
        if (!board[row + i][col + j].isClicked) {
          board[row + i][col + j].isClicked = true;
          if (board[row + i][col + j].neighbors === 0) {
            clearAdjacentCells(board, row + i, col + j);
          }
        }
      }
    }
  }
};

const startGame = (dimension = 8, difficulty = 0.1) => {
  const board = [];
  for (let i = 0; i < dimension; i++) {
    board.push([]);
    for (let j = 0; j < dimension; j++) {
      const hasMine = Math.random() < difficulty;
      board[i].push(makeCell(hasMine));
    }
  }
  countNeighbors(board);
  return { board, lost: false };
};

const clickCell = ({ board }, row, col) => {
  const newBoard = board.slice();
  const cell = newBoard[row][col];
  cell.isClicked = true;
  if (cell.hasMine) {
    return { board: newBoard, lost: true };
  } else if (cell.neighbors === 0) {
    clearAdjacentCells(newBoard, row, col);
  }
  return { board: newBoard, lost: false };
};

const countFreeCells = board => {
  let freeCells = 0;
  board.forEach(row =>
    row.forEach(cell => {
      if (!cell.hasMine && !cell.isClicked) {
        freeCells++;
      }
    })
  );
  return freeCells;
};

export { startGame, clickCell, countFreeCells };
