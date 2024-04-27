import { createStore, combineReducers } from 'redux';
import authReducer from "../reducer/AuthReducer";
import userReducer from "../reducer/userReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    userInfo: userReducer
});

const store = createStore(rootReducer);

export default store;