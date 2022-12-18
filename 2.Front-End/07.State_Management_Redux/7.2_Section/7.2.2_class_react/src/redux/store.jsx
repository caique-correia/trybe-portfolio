import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension'
import defeatSaga from './cosmoReducer';

const store = createStore(defeatSaga, composeWithDevTools());

export default store;