import axios from 'axios';
import {AUTH_ERROR, AUTH_REGISTER, AUTH_LOG_IN, AUTH_LOG_OUT, DATA_REQUEST, DATA_REQUEST_ERROR} from "./types";

export const logIn = data => {
    return async dispatch => {
        try {
           const res = await axios.post('http://localhost:5000/users/login', data);
            console.log('res', res);

            dispatch({
                type: AUTH_LOG_IN,
                payload: res.data
            });

            localStorage.setItem('JWT_TOKEN', res.data.token);
        }catch (e) {
            dispatch({
                type: AUTH_ERROR,
                payload: e.message
            });
            console.log('err', e);
        }
    };
};

export const register = data => {
    return async dispatch => {
        try {
            const res = await axios.post('http://localhost:5000/users/register', data);
            console.log('res', res);

            dispatch({
                type: AUTH_REGISTER,
                payload: res.data
            });

            localStorage.setItem('JWT_TOKEN', res.data.token);
        }catch (e) {
            dispatch({
                type: AUTH_ERROR,
                payload: e.message
            });
            console.log('err', e);
        }
    };
};

export const logOut = () => {
    return dispatch => {
        localStorage.removeItem('JWT_TOKEN');
        dispatch({
            type: AUTH_LOG_OUT,
            payload:''
        })
    };
};

export const  getDataFromDb = () => {

    return async dispatch => {
        try {
             const res = await axios.get('http://localhost:5000/dashboard/books/most-popular-books');
            console.log('res', res);
            dispatch({
                type: DATA_REQUEST,
                payload: res.data
            });
        }catch (e) {
            dispatch({
                type: DATA_REQUEST_ERROR,
                payload: e.message
            });
            console.log('err', e);
        }


    };

};
