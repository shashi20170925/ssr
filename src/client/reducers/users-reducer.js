import {FETCH_USERS } from '../actions';


export default (state = [], action) => {
    console.log(" in the user reducer ",action, state );

    switch (action.type) {
        case FETCH_USERS:
            return action.payload.data;
        default:
            return state;

    }

}