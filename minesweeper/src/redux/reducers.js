import { combineReducers } from 'redux';
import GameBoard from '../game/gameBoard';

const gameStatus = (state = {}, action) => {
  let newState = state;
  if (action.type === 'UPDATE_GAME_BOARD') {
    newState = action.gameBoard;
  }
  return newState;
};

const gameBoard = (state = new GameBoard(), action) => {
  let newState = state;
  if (action.type === 'UPDATE_GAME_STATUS') {
    newState = action.gameBoard;
  }
  return newState;
};

export default combineReducers({ gameStatus, gameBoard });
