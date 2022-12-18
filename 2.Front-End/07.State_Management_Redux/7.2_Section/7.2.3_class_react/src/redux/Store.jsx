import { legacy_createStore as createStore } from 'redux';
import selectedPill from './Reducers';

const store = createStore(selectedPill);

export default store;
