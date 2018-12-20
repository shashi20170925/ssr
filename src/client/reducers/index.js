import { combineReducers } from 'redux';
import userReducer from './users-reducer';
import authReducer from './authReducer';

export default combineReducers(
    {
        users: userReducer,
        auth: authReducer,
        
    }
);