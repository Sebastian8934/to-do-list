import axios from 'axios';
import config from "../constant/services.json";
import { GET_TASK_ID,GET_TASK_ALL } from '../constant/constant';

export const getTaskIdService = (id) => async (dispatch, getState) => {
    try {
        const res = await axios.get(config.url+config.urls.task,id);
        console.log(res);
        dispatch({
            type: GET_TASK_ID,
            payload: res.data
        });
    } catch (error) {
        // console.log(error);
        dispatch({
            type: GET_TASK_ID,
            payload: { 
                statusCode:error.response.status,
                message:error.response.statusText, 
                data:error.response.data
            }
        });
    }
};

export const getTaskmAllService = () => async (dispatch, getState) => {
    try {
        const res = await axios.get(config.url+config.urls.task);  
        dispatch({
            type: GET_TASK_ALL,
            payload: res.data
        });
    } catch (error) {
        // console.log(error);
        dispatch({
            type: GET_TASK_ALL,
            payload: { 
                statusCode:error.response.status,
                message:error.response.statusText, 
                data:error.response.data
            }
        });
    }
};

// export const creatTService = (body) => async (dispatch, getState) => {
//     try {
//         const res = await axios.post(config.urlDev+config.user.urlUser,body);
//         // console.log(res);
//         let result = res.data;
//         return result;
//     } catch (error) {
//         console.log(error);
//         return error;
//     }
// };