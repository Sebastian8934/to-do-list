import axios from 'axios';
import config from "../constant/services.json";
import { GET_STATUS_TASK_ALL,GET_STATUS_TASK_ID } from '../constant/constant';

export const getStatusTaskAIdService = (id) => async (dispatch, getState) => {
    try {
        const res = await axios.get(config.url + config.urls.statusTask, id);
        console.log(res);
        dispatch({
            type: GET_STATUS_TASK_ID,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: GET_STATUS_TASK_ID,
            payload: { 
                statusCode:error.response.status,
                message:error.response.statusText, 
                data:error.response.data
            }
        });
    }
};

export const getStatusTaskAllService = () => async (dispatch, getState) => {
    try {
        const res = await axios.get(config.url + config.urls.statusTask);  
        dispatch({
            type: GET_STATUS_TASK_ALL,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: GET_STATUS_TASK_ALL,
            payload: { 
                statusCode:error.response.status,
                message:error.response.statusText, 
                data:error.response.data
            }
        });
    }
};

export const createStatusTaskService = async (body) => {
    try {
        const res = await axios.post(config.urlProd + config.urls.statusTask, body);
        return res.data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const updateStatusTaskService = async (body) => {
    try {
        const res = await axios.put(config.urlProd + config.urls.statusTask + body.id, body);
        return res.data; 
    } catch (error) {
        console.log(error);
    }
};

export const deleteStatusTaskService = async (id) => {
    try {
        const res = await axios.delete(config.urlProd + config.urls.statusTask + id);
        return res.data;
    } catch (error) {
        console.log(error);
        return error;
    }
};