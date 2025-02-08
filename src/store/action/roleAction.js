import axios from "axios";
import config from "../constant/services.json";
import { GET_ROLE_ID, GET_ROLE_ALL } from "../constant/constant";

export const getRoleIdService = id => async dispatch => {
    try {
        const res = await axios.get(config.url + config.urls.role, id);
        
        dispatch({
            type: GET_ROLE_ID,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: GET_ROLE_ID,
            payload: { 
                statusCode: error.response.status,
                message: error.response.statusText, 
                data: error.response.data
            }
        });
    }
}

export const getRoleAllService = () => async dispatch => {
    try {
        const res = await axios.get(config.url + config.urls.role);

        dispatch({
            type: GET_ROLE_ALL,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: GET_ROLE_ALL,
            payload: { 
                statusCode: error.response.status,
                message: error.response.statusText, 
                data: error.response.data
            }
        });
    }
}

export const createRoleService = async body => {
    try {
        const res = await axios.post(config.urlProd + config.urls.role, body);
        return res.data;
    } catch (error) {
        return {
            statusCode: error.response.status,
            message: error.response.statusText, 
            data: error.response.data
        }
    }
}

export const updateRoleService = async body => {
    try {
        const res = await axios.put(config.urlProd + config.urls.role + body.id, body);
        return res.data; 
    } catch (error) {
        return {
            statusCode: error.response.status,
            message: error.response.statusText, 
            data: error.response.data
        }
    }
}

export const deleteRoleService = async id => {
    try {
        const res = await axios.delete(config.urlProd + config.urls.role + id);
        return res.data;
    } catch (error) {
        return {
            statusCode: error.response.status,
            message: error.response.statusText, 
            data: error.response.data
        }
    }
}
