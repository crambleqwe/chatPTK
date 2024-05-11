import {LOGIN, LOGOUT, SET_USER_ID, SET_USER_INFO} from "../constants/constants";
import storage from "../../components/storage/Storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
    user : {
        name: "Иван",
        lastName: "Иванов",
        middleName: "Иванович",
        user_id : 0,
        login: "s000000",
        group: 1111,
        role: "student",
        isAuthenticated: false
    }
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_INFO:{
            let userInfoUpdate = JSON.stringify(action.payload)
            storage.setUserInfoLocally(userInfoUpdate).then(r => console.log(JSON.parse(userInfoUpdate)));
            return{
                ...state,
                user: {
                    ...state.user,
                    ...action.payload
                }
            }
        }
        case SET_USER_ID:
            AsyncStorage.setItem('userId', action.payload.user_id)
            return{
                ...state,
                user: {
                    ...state.user,
                    user_id: action.payload.user_id
                }
            }

        case LOGIN:
            storage.setUserAuth(true)
                //.then(response => console.log(response))
            return {
                ...state,
                user : {
                    ...state.user,
                    isAuthenticated: true}
                };
        case LOGOUT:
            storage.setUserAuth(false)
                .then(response => console.log(response))
            return {
                ...state,
                user : {
                    ...state.user,
                    isAuthenticated: false
                }
            };
        default: return state

    }

}
export default userReducer