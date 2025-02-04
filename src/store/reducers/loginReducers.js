import { LOGIN,LOGOUT } from "../constant/constant";

const initialState = {
    statusCode:0,
    message:"",
    data:[]
};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return { ...state,statusCode:action.payload.statusCode,message:action.payload.message,data:action.payload.data };
        case LOGOUT:
            return { ...state,statusCode:action.payload.statusCode,message:action.payload.message,data:action.payload.data };
        default:
            return state;
    }
}