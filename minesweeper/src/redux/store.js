import rootReducer from '.reducers.js';

var reducer = rootReducer;
var listeners = [];
var state;

var store = {
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
