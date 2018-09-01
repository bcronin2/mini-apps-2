import { combineReducers } from 'redux';
import { startGame, clickCell } from '../game/gameplay';

const gameplay = (state = startGame(), action) => {
  let newState = state;
  if (action.type === 'CLICK_CELL') {
    newState = clickCell(state, action.row, action.col);
  } else if (action.type === 'NEW_GAME') {
    newState = startGame();
  }
  return newState;
};

const rootReducer = combineReducers({ gameplay });

export default rootReducer;
