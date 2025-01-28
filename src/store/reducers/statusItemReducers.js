import { GET_STATUS_ITEM_ID,GET_STATUS_ITEM_ALL } from "../constant/constant";

const initialState = {
    data:[],
    statusCode:0,
    message:""
};

export default function statusItemReducer(state = initialState, action) {
    switch (action.type) {
        case GET_STATUS_ITEM_ID:
            return { ...state,statusCode:action.payload.statusCode,message:action.payload.message,data:action.payload.data };
        case GET_STATUS_ITEM_ALL:
            return { ...state,statusCode:action.payload.statusCode,message:action.payload.message,data:action.payload.data };        
        default:
            return state;
    }
}