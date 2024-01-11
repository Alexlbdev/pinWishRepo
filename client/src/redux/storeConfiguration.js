import {createStore} from "redux";
import {loginFormReducer} from "./reducers/loginFormReducer";
const initialState = {
    user: undefined,
    entryFormIsOpen: true
}

const store = createStore(loginFormReducer, initialState);
export default store;