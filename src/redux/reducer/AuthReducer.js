// стал не нужен

import {LOGIN, LOGOUT} from "../constants/constants";
import storage from "../../components/storage/Storage";

const initialState = {
    isAuthenticated: true,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            storage.setUserAuth(true)
                .then(response => console.log(response))
            return {
                ...state,
                isAuthenticated: true,
            };
        case LOGOUT:
            storage.setUserAuth(false)
                .then(response => console.log(response))
            return {
                ...state,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};

export default authReducer;