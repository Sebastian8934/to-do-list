import { GET_STATUS_USER_ID, GET_STATUS_USER_ALL } from "../constant/constant";

const initialState = {
    data: [],
    statusCode: 0,
    message: ""
}

export default function statusUserReducer(state = initialState, action) {
    switch (action.type) {
        case GET_STATUS_USER_ID:
        case GET_STATUS_USER_ALL:
            return { ...state,
                statusCode: action.payload.statusCode,
                message: action.payload.message,
                data: action.payload.data
            }
        default:
            return state;
    }
}
