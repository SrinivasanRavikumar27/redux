// import create store and root reducers 
import rootReducers from '../reducers/RootReducers';
import {createStore} from 'redux';

const store = createStore(rootReducers);

export default store;