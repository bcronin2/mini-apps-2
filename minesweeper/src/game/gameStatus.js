class GameStatus {
  constructor() {
    this.inProgress = true;
    this.won = false;
  }

  finishGame(hasWon) {
    this.inProgress = false;
    this.won = hasWon;
  }
}

export default GameStatus;
