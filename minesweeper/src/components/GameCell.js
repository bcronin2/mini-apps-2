import React from 'react';

import './GameCell.css';

export default ({ cell, handleClick, handleFlag }) => {
  let content = '';
  if (cell.isClicked && cell.neighbors > 0 && !cell.hasMine) {
    content = cell.neighbors;
  } else if (cell.isClicked && cell.hasMine) {
    content = '💣';
  } else if (cell.isFlagged) {
    content = '🚩';
  }
  return (
    <div className={`game-cell ${cell.isClicked ? 'clicked' : ''}`} onClick={handleClick} onContextMenu={handleFlag}>
      {content}
    </div>
  );
};
