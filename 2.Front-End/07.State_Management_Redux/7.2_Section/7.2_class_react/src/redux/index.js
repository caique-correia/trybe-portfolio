import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const INIT_STATE = { count: 0 }

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  };
};

const store = createStore(reducer, composeWithDevTools());

export default store;