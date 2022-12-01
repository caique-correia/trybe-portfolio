import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const INIT_STATE = { count: 0, clicks: 0 }

const reducer = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  const { count, clicks } = state;

  switch (type) {
    case 'COUNTER_SUM':
      return { ...state, count: count + payload }
    case 'COUNTER_RESET':
      return { ...state, count: 0 }
    case 'CLICK_COUNT':
      return { ...state, clicks: clicks + 1 }
    case 'CLICK_RESET':
      return { ...state, clicks: 0 }
    default:
      return state;
  };
};

const store = createStore(reducer, composeWithDevTools());

export const actSum = (toSum = 100) => ({
  type: 'COUNTER_SUM',
  payload: toSum,
});

export const actClick = () => ({
  type: 'CLICK_COUNT'
});

export const actReset1 = () => ({
  type: 'COUNTER_RESET',
});

export const actReset2 = () => ({
  type: 'CLICK_RESET'
});

export default store;