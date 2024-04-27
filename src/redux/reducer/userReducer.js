import {SET_USER_INFO} from "../constants/constants";

const initialState = {
    user : {
        name: "Иван",
        lastName: "Иванов",
        middleName: "Иванович",
        group: 1234,
        role: "student"
    }
};


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_INFO:{
            return{
                ...state,
                name: action.payload.name,
                lastName: action.payload.lastName,
                middleName: action.payload.middleName,
                group: action.payload.group
            }
        }
        default: return state

    }

}
export default userReducer