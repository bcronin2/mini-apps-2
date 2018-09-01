import React from 'react';
import BoardCell from './BoardCell';

export default ({ gameBoard, updateGameBoard }) => {
  const handleClick = (row, col) => {
    gameBoard.clickCell(row, col);
    updateGameBoard(gameBoard);
  };
  return (
    <div>
      {gameBoard.board.map((row, rowIndex) => (
        <div>
          {row.map((cell, colIndex) => (
            <BoardCell cell={cell} handleClick={() => handleClick(rowIndex, colIndex)} />
          ))}
        </div>
      ))}
    </div>
  );
};
