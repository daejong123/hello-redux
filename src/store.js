import {createStore, combineReducers} from 'redux';
import titleReducer from './reducers/titleReducer';
import ageReducer from './reducers/ageReducer';

let reducers = combineReducers({
    titleReducer,
    ageReducer
})
const store = createStore(reducers);

export default store;