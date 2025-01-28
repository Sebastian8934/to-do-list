import { GET_TASK_ID,GET_TASK_ALL } from "../constant/constant";

const initialState = {
    data:[],
    statusCode:0,
    message:""
};

export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TASK_ID:
            return { ...state,statusCode:action.payload.statusCode,message:action.payload.message,data:action.payload.data };
        case GET_TASK_ALL:
            return { ...state,statusCode:action.payload.statusCode,message:action.payload.message,data:action.payload.data };
        default:
            return state;
    }
}