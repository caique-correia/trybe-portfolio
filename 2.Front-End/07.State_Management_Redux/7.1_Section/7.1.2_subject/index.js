import { combineReducers, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension'

const THEME_INITIAL_STATE = {
  theme: 'dark',
};

const themeReducer = (state = THEME_INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case 'THEME':
      return { ...state, theme: payload }
    default:
      return state;
  }
};

const STATUS_INITIAL_STATE = {
  status: 'Offline',
};

const statusReducer = (state = STATUS_INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case 'STATUS':
      return { ...state, status: payload }
    default:
      return state;
  }
};

const rootReducer = combineReducers({ themeReducer, statusReducer });
const store = createStore(rootReducer, composeWithDevTools());

const themeChange = () => {
  const { theme } = store.getState().themeReducer;
  const newTheme = theme === 'dark' ? 'light' : 'dark';
  return { type: 'THEME', payload: newTheme }
};

const statusChange = () => {
  const { status } = store.getState().statusReducer;
  const newStatus = status === 'Offline' ? 'Online' : 'Offline';
  return { type: 'STATUS', payload: newStatus }
};

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

themeButton.addEventListener('click', () => store.dispatch(themeChange()));
statusButton.addEventListener('click', () => store.dispatch(statusChange()));

store.subscribe(() => {
  const { theme } = store.getState().themeReducer;
  const { status } = store.getState().statusReducer;

  const bodyStyle = document.querySelector('body').style
  const bgTheme = theme === 'dark' ? '#333' : '#ccc';
  const colorTheme = theme === 'dark' ? 'white' : 'black';

  bodyStyle.backgroundColor = bgTheme;
  bodyStyle.color = colorTheme;

  const reverseStatus = status === 'Offline' ? 'Ficar Online' : 'Ficar Offline';
  document.getElementById('status').innerText = status;
  statusButton.innerText = reverseStatus;
});