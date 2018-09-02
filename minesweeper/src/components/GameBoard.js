import React from 'react';
import GameCell from './GameCell';
import { countFreeCells } from '../game/game';

import './GameBoard.css';

export default ({ board, lost, clickCell, flagCell, startNewGame }) => {
  const freeCells = countFreeCells(board);
  const handleClick = (row, col) => {
    if (freeCells > 0 && !lost && !board[row][col].isFlagged) {
      clickCell(row, col);
    }
  };
  const handleFlag = (e, row, col) => {
    e.preventDefault();
    if (freeCells > 0 && !lost && !board[row][col].isClicked) {
      flagCell(row, col);
    }
  };
  return (
    <div className="game-board">
      {board.map((row, rowIndex) => (
        <div className="game-row">
          {row.map((cell, colIndex) => {
            return (
              <GameCell
                cell={cell}
                handleClick={() => handleClick(rowIndex, colIndex)}
                handleFlag={e => handleFlag(e, rowIndex, colIndex)}
              />
            );
          })}
        </div>
      ))}
      {(lost || freeCells === 0) && (
        <div>
          <div>{lost ? 'GAME OVER' : 'YOU WON!'}</div>
          <button onClick={startNewGame}>Play again</button>
        </div>
      )}
    </div>
  );
};
