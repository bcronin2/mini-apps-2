import React from 'react';
import GameCellContainer from '../containers/GameCellContainer';

export default ({ gameBoard }) => {
  return (
    <div>
      {gameBoard.board.map((row, rowIndex) => (
        <div>
          {row.map((cell, colIndex) => (
            <GameCellContainer cell={cell} row={rowIndex} col={colIndex} />
          ))}
        </div>
      ))}
    </div>
  );
};
