import React from 'react';

export default ({ cell, handleClick }) => {
  return <span onClick={handleClick}>Cell - {cell.hasMine}</span>;
};
