import React from 'react';

import './GameCell.css';

export default ({ cell, handleClick }) => {
  return (
    <div className={`game-cell ${cell.isClicked ? 'clicked' : ''}`} onClick={handleClick}>
      {cell.isClicked && cell.neighbors && !cell.hasMine ? cell.neighbors : ''}
      {cell.isClicked && cell.hasMine ? '💣' : ''}
    </div>
  );
};
