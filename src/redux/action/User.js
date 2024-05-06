import {SET_USER_INFO} from "../constants/constants";
export function setUserInfo(name, lastName, middleName){
    return{
        payload: {
            name,
            lastName,
            middleName,
        },
        type: SET_USER_INFO
    }
}