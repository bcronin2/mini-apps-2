import rootReducer from './reducers.js';

let reducer = rootReducer;
let listeners = [];
let state;

const store = {
  dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(func => func(state));
  },

  subscribe(listener) {
    listeners.push(listener);
  },

  getState() {
    return state || reducer(state, { type: null });
  },

  replaceReducer(newReducer) {
    reducer = newReducer;
  }
};

export default store;
