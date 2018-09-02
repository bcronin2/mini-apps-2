import { combineReducers } from 'redux';
import { clickCell, flagCell, startGame } from '../game/game';

const game = (state = startGame(), action) => {
  let newState = state;
  if (action.type === 'CLICK_CELL') {
    newState = clickCell(state, action.row, action.col);
  } else if (action.type === 'FLAG_CELL') {
    newState = flagCell(state, action.row, action.col);
  } else if (action.type === 'NEW_GAME') {
    newState = startGame();
  }
  return newState;
};

const rootReducer = combineReducers({ game });

export default rootReducer;
