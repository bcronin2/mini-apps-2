import { combineReducers } from 'redux';

const gameStatus = (state = {}, action) => {
  const newState = state;
  if (action.type === 'UPDATE_GAME_BOARD') {
    newState = action.gameBoard;
  }
  return newState;
};

const gameBoard = (state = {}) => {
  const newState = state;
  if (action.type === 'UPDATE_GAME_STATUS') {
    newState = action.gameBoard;
  }
  return newState;
};

export default combineReducers({ gameStatus, gameBoard });
