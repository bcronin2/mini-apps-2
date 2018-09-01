import { combineReducers } from 'redux';
import GameBoard from '../game/gameBoard';

const gameStatus = (state = {}, action) => {
  let newState = state;
  if (action.type === 'UPDATE_GAME_STATUS') {
    newState = action.gameBoard;
  }
  return newState;
};

const gameBoard = (state, action) => {
  let newState = new GameBoard();
  if (action.type === 'UPDATE_GAME_BOARD') {
    state.clickCell(action.row, action.col);
    newState.board = state.board;
  }
  return newState;
};

const rootReducer = combineReducers({ gameStatus, gameBoard });

export default rootReducer;
