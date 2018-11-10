import {createStore, combineReducers} from 'redux';
import titleReducers from './reducers/titleReducers';

const store = createStore(titleReducers);

export default store;