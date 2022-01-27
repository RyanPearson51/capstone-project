import { combineReducers } from 'redux';

const ratings = (state = [], action) => {
    switch (action.type) {
        case 'ADD_BUSINESS':
            return [...state, action.value];
        case 'REMOVE_BUSINESS':
            let newState = [...state];
            newState.splice(action.value, 1);
            return newState;
        default:
            return state;
    }
};

const user = (state = null, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return action.value;
        case 'REMOVE_USER':
            return action.value;
        default:
            return state;
    }
};

export default combineReducers({ ratings, user });