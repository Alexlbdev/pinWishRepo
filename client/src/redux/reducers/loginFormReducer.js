import {CLOSE, LOGIN, LOGOUT, OPEN} from '../actions/loginFormActions';

export function loginFormReducer(state, action){
    switch (action.type) {
        case OPEN:
            return {...state, entryFormIsOpen: action.payload};
        case CLOSE:
            return {...state, entryFormIsOpen: action.payload};
        case LOGIN:
            return {...state, user: action.payload.user, entryFormIsOpen: action.payload.entryFormIsOpen};
        case LOGOUT:
            return {...state, user: action.payload.use, entryFormIsOpen: action.payload.entryFormIsOpen};
        default:
            return state;
    }
}