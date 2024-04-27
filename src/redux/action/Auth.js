import {LOGIN, LOGOUT} from "../constants/constants";

export function userLogin(){
    return{
        type: LOGIN
    }
}

export function userLogout(){
    return{
        type: LOGOUT
    }
}