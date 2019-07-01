import axios from 'axios';
import {AUTH_ERROR, AUTH_REGISTER} from "./types";

export const login = data => {
    return async dispatch => {
        try {
           const res = await axios.post('http://localhost:5000/users/login', data);
            console.log('res', res);
        }catch (e) {
            console.log('err', e);
        }
    }
};

export const register = data => {
    return async dispatch => {
        try {
            const res = await axios.post('http://localhost:5000/users/register', data);
            console.log('res', res);

            dispatch({
                type: AUTH_REGISTER,
                payload: res.data.token
            });

            localStorage.setItem('JWT_TOKEN', res.data.token);
        }catch (e) {
            dispatch({
                type: AUTH_ERROR,
                payload: e.message
            });
            console.log('err', e);
        }
    }
};
