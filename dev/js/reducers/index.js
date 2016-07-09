import {combineReducers} from 'redux';
import UserReducer from './reducerusers';
import ActiveUserReducer from './reduceractiveuser';

const allReducers = combineReducers({
   users:UserReducer,
   activeusers:ActiveUserReducer
});

export default allReducers;
