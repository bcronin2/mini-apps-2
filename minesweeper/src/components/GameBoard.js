import React from 'react';
import GameCell from './GameCell';

import './GameBoard.css';

export default ({ gameBoard, clickCell }) => {
  console.log(gameBoard.board[0][0]);
  return (
    <div className="game-board">
      {gameBoard.board.map((row, rowIndex) => (
        <div className="game-row">
          {row.map((cell, colIndex) => {
            console.log(cell);
            return <GameCell handleClick={() => clickCell(rowIndex, colIndex)} cell={cell} />;
          })}
        </div>
      ))}
    </div>
  );
};
