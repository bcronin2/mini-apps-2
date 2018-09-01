import React from 'react';
import BoardCell from './BoardCell';

export default ({ gameBoard, clickCell }) => {
  const handleClick = (row, col) => {
    console.log('clicking');
    clickCell(row, col);
  };
  console.log(gameBoard);
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
