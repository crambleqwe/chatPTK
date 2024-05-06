import {SET_USER_INFO} from "../constants/constants";
export function setUserInfo({ name, lastName, middleName, group }){
    return {
        payload: { name, lastName, middleName, group },
        type: SET_USER_INFO
    }
}