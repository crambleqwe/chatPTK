import {LOGIN, LOGOUT} from "../constants/constants";

export function userLogin(){
    console.log("user login")
    return{
        type: LOGIN
    }
}

export function userLogout(){
    console.log("user logout")
    return{
        type: LOGOUT
    }
}