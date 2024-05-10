import {SET_USER_INFO} from "../constants/constants";
export function setUserInfo(userInfo){
    return {
        payload: userInfo,
        type: SET_USER_INFO
    }
}

export function setUserid(user_id){
    return {
        payload: user_id,
        type: SET_USER_INFO
    }
}