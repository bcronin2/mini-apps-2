import React from 'react';
import GameCell from './GameCell';

import './GameBoard.css';

export default ({ board, freeCells, lost, clickCell, startNewGame }) => {
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
      {lost && (
        <div>
          <div>GAME OVER</div>
          <button onClick={startNewGame}>Play again</button>
        </div>
      )}
      {freeCells === 0 && 'YOU WON'}
    </div>
  );
};
