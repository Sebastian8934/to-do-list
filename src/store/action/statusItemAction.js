import axios from 'axios';
import config from "../constant/services.json";
import { GET_STATUS_ITEM_ID,GET_STATUS_ITEM_ALL } from '../constant/constant';

export const getStatusItemIdService = (id) => async (dispatch, getState) => {
    try {
        const res = await axios.get(config.url+config.urls.statusItem,id);
        console.log(res);
        dispatch({
            type: GET_STATUS_ITEM_ID,
            payload: res.data
        });
    } catch (error) {
        // console.log(error);
        dispatch({
            type: GET_STATUS_ITEM_ID,
            payload: { 
                statusCode:error.response.status,
                message:error.response.statusText, 
                data:error.response.data
            }
        });
    }
};

export const getStatusItemAllService = () => async (dispatch, getState) => {
    try {
        const res = await axios.get(config.url+config.urls.statusItem);  
        dispatch({
            type: GET_STATUS_ITEM_ALL,
            payload: res.data
        });
    } catch (error) {
        // console.log(error);
        dispatch({
            type: GET_STATUS_ITEM_ALL,
            payload: { 
                statusCode:error.response.status,
                message:error.response.statusText, 
                data:error.response.data
            }
        });
    }
};

export const createStatusItemService = async (body) => {
    try {
        const res = await axios.post(config.url+config.urls.statusItem,body);
        // console.log(res);
        return res.data;
    } catch (error) {
        console.log(error);
        return {
            statusCode:error.response.status,
            message:error.response.statusText, 
            data:error.response.data
        }
    }
};

export const deleteStatusItemService = async (id) => {
    try {
        const res = await axios.delete(config.url+config.urls.statusItem+id);
        // console.log(res);
        return res.data;
    } catch (error) {
        console.log(error);
        return {
            statusCode:error.response.status,
            message:error.response.statusText, 
            data:error.response.data
        }
    }
};