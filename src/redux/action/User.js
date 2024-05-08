import {SET_USER_INFO} from "../constants/constants";
export function setUserInfo({ name, lastName, middleName, login,  group }){
    return {
        payload: { name, lastName, middleName, login, group },
        type: SET_USER_INFO
    }
}

export function setUserid(user_id){
    return {
        payload: user_id,
        type: SET_USER_INFO
    }
}