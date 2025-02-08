import { GET_ROLE_ID, GET_ROLE_ALL } from "../constant/constant";

const initialState = {
    data: [],
    statusCode: 0,
    message: ""
}

export default function roleReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ROLE_ID:
        case GET_ROLE_ALL:
            return { ...state,
                statusCode: action.payload.statusCode,
                message: action.payload.message,
                data: action.payload.data
            }
        default:
            return state;
    }
}