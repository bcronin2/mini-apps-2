import React from 'react';

export default ({ cell, handleClick }) => {
  return <span onClick={handleClick}>{JSON.stringify(cell)}</span>;
};
