import { combineReducers } from 'redux';
import userReducer from './users-reducer';
import authReducer from './authReducer';
import adminsReducer from './adminsReducer';


export default combineReducers(
    {
        users: userReducer,
        auth: authReducer,
        admins: adminsReducer,
        
    }
);