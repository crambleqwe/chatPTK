import {SET_USER_INFO} from "../constants/constants";
import storage from "../../components/storage/Storage";

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
            storage.setUserInfoLocally(userInfoUpdate)
                .then((response) => console.log(response))
            return{
                ...state,
                user: {
                    user_id: action.payload.user_id,
                    login : action.payload.login,
                    name: action.payload.name,
                    lastName: action.payload.lastName,
                    middleName: action.payload.middleName,
                    group: action.payload.group,
                }
            }
        }
        default: return state

    }

}
export default userReducer