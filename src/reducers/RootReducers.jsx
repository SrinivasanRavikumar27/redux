// import all reducer to combine has single reducer 
import productReducer from "./ProductReducer";
import cartReducers from '../reducers/CartReducer';
import {combineReducers} from 'redux';

const rootReducers = combineReducers({
    product : productReducer,
    cart : cartReducers
});

export default rootReducers;
