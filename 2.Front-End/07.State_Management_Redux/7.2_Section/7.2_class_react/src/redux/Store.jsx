import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const INIT_STATE = { count: 0 }

const reducer = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  const { count } = state;

  switch (type) {
    case 'COUNTER_SUM':
      return { ...state, count: count + payload }
    case 'COUNTER_RESET':
      return { ...state, count: 0 }
    default:
      return state;
  };
};

const store = createStore(reducer, composeWithDevTools());

export const actionSum = (toSum = 100) => ({
  type: 'COUNTER_SUM',
  payload: toSum,
});

export const actionReset = () => ({
  type: 'COUNTER_RESET',
});

export default store;