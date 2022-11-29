import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case 'NEXT_COLOR':
      return { ...state, index: payload }
    case 'PREVIOUS_COLOR':
      return { ...state, index: payload }
    case 'RANDOM_COLOR':
      return { ...state, colors: [...state.colors, payload ] }
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

const nextColor = () => {
  const {colors, index} = store.getState();
  const nextColor = index >= colors.length - 1 ? 0 : index + 1;
  return { type: 'NEXT_COLOR', payload: nextColor }
};

const prevColor = () => {
  const {colors, index} = store.getState();
  const prevColor = index <= 0 ? colors.length - 1 : index - 1;
  return { type: 'PREVIOUS_COLOR', payload: prevColor }
};

const randomColor = () => {
  const newColor = `#${Math.ceil(Math.random()*16777216).toString(16)}`;
  console.log(newColor);
  return { type: 'RANDOM_COLOR', payload: newColor }
};

const nextButton = document.getElementById('next');
const prevButton = document.getElementById('previous');
const randomButton = document.getElementById('random');

nextButton.addEventListener('click', () => store.dispatch(nextColor()));
prevButton.addEventListener('click', () => store.dispatch(prevColor()));
randomButton.addEventListener('click', () => store.dispatch(randomColor()));

store.subscribe(() => {
  const {colors, index} = store.getState();
  document.getElementById('value').innerHTML = colors[index];
  document.getElementById('container').style.backgroundColor = colors[index];
});
