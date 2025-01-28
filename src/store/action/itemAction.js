import axios from 'axios';
import config from "../constant/services.json";
import { GET_ITEM_ID,GET_ITEM_ALL } from '../constant/constant';

export const getItemIdService = (id) => async (dispatch, getState) => {
    try {
        const res = await axios.get(config.url+config.urls.item,id);
        console.log(res);
        dispatch({
            type: GET_ITEM_ID,
            payload: res.data
        });
    } catch (error) {
        // console.log(error);
        dispatch({
            type: GET_ITEM_ID,
            payload: { 
                statusCode:error.response.status,
                message:error.response.statusText, 
                data:error.response.data
            }
        });
    }
};

export const getItemAllService = () => async (dispatch, getState) => {
    try {
        const res = await axios.get(config.url+config.urls.item);  
        dispatch({
            type: GET_ITEM_ALL,
            payload: res.data
        });
    } catch (error) {
        // console.log(error);
        dispatch({
            type: GET_ITEM_ALL,
            payload: { 
                statusCode:error.response.status,
                message:error.response.statusText, 
                data:error.response.data
            }
        });
    }
};