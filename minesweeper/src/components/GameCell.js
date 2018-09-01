import React from 'react';

import './GameCell.css';

export default ({ cell, row, col, clickCell }) => {
  return <span onClick={() => clickCell(row, col)}>{cell.neighbors}</span>;
};
