class BoardCell {
  constructor(hasMine) {
    this.hasMine = hasMine;
    this.isClicked = false;
  }
}

class GameBoard {
  constructor(dimension, difficulty = 0.1) {
    this.board = [];
    for (let i = 0; i < dimension; i++) {
      board.push([]);
      for (let j = 0; j < dimension; j++) {
        const hasMine = Math.random() < difficulty;
        board[i].push(new BoardCell(hasMine));
      }
    }
  }

  clickCell(row, col) {
    board[row][col].isClicked = true;
  }

  countNeighbors(row, coll) {
    let neighbors = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (this.board[row + i] && this.board[row + i][col + j] && this.board[row + i][col + j].hasMine) {
          neighbors++;
        }
      }
    }
    return neighbors;
  }
}
