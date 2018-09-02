import React from 'react';
import GameCell from './GameCell';
import { countFreeCells } from '../game/game';

import './GameBoard.css';

export default ({ board, lost, clickCell, startNewGame }) => {
  const freeCells = countFreeCells(board);
  const handleClick = (row, col) => {
    if (freeCells > 0 && !lost) {
      clickCell(row, col);
    }
  };
  return (
    <div className="game-board">
      {board.map((row, rowIndex) => (
        <div className="game-row">
          {row.map((cell, colIndex) => {
            return <GameCell handleClick={() => handleClick(rowIndex, colIndex)} cell={cell} />;
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
