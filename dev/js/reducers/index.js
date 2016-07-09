import {combineReducers} from 'redux';
import UserReducer from './reducerusers';

const allReducers = combineReducers({
   user:UserReducer
});

export default allReducers;
