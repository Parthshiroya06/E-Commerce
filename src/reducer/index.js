import {combineReducers} from 'redux';
import {cartData} from './commonReducer';

const rootReducer = combineReducers({cartData: cartData});

export default rootReducer;
