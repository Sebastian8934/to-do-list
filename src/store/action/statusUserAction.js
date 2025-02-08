import axios from "axios";
import config from "../constant/services.json";
import { GET_STATUS_USER_ID, GET_STATUS_USER_ALL } from "../constant/constant";

export const getStatusUserIdService = id => async dispatch => {
    try {
        const res = await axios.get(config.url + config.urls.statusUser, id);
        
        dispatch({
            type: GET_STATUS_USER_ID,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: GET_STATUS_USER_ID,
            payload: { 
                statusCode: error.response.status,
                message: error.response.statusText, 
                data: error.response.data
            }
        });
    }
}

export const getStatusUserAllService = () => async dispatch => {
    try {
        const res = await axios.get(config.url + config.urls.statusUser);

        dispatch({
            type: GET_STATUS_USER_ALL,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: GET_STATUS_USER_ALL,
            payload: { 
                statusCode: error.response.status,
                message: error.response.statusText, 
                data: error.response.data
            }
        });
    }
}

export const createStatusUserService = async body => {
    try {
        const res = await axios.post(config.urlProd + config.urls.statusUser, body);
        return res.data;
    } catch (error) {
        return {
            statusCode: error.response.status,
            message: error.response.statusText, 
            data: error.response.data
        }
    }
}

export const updateStatusUserService = async body => {
    try {
        const res = await axios.put(config.urlProd + config.urls.statusUser + body.id, body);
        return res.data; 
    } catch (error) {
        return {
            statusCode: error.response.status,
            message: error.response.statusText, 
            data: error.response.data
        }
    }
}

export const deleteStatusUserService = async id => {
    try {
        const res = await axios.delete(config.urlProd + config.urls.statusUser + id);
        return res.data;
    } catch (error) {
        return {
            statusCode: error.response.status,
            message: error.response.statusText, 
            data: error.response.data
        }
    }
}
