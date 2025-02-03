import axios from 'axios';
import config from "../constant/services.json";
import { LOGIN, LOGOUT } from '../constant/constant';

export const login = (body) => async (dispatch, getState) => {
    try {
        const res = await axios.post(config.url+config.urls.login,body);
        // console.log(res);
        dispatch({
            type: LOGIN,
            payload: res.data
        });
        return res.data;
    } catch (error) {
        // console.log(error);
        dispatch({
            type: LOGIN,
            payload: { 
                statusCode:error.response.status,
                message:error.response.statusText, 
                data:error.response.data
            }
        });
    }
};

export const logout = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: LOGOUT,
            payload: {
                statusCode:0,
                message:"Session cerrada",
                data:[]
            }
        });        
    } catch (error) {
        // console.log(error);
        dispatch({
            type: LOGOUT,
            payload: { 
                statusCode:error.response.status,
                message:error.response.statusText, 
                data:error.response.data
            }
        });
    }
};