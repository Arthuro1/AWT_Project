import axios from 'axios';
import {
  AUTH_ERROR,
  AUTH_REGISTER,
  SEARCH,
  SEARCH_ERROR,
  AUTH_LOG_IN,
  AUTH_LOG_OUT,
  FILTER_SELECTED,
  DATA_REQUEST,
  DATA_REQUEST_ERROR,
  GET_COMMENT,
  POST_COMMENT,
  COMMENT_ERROR,
  BOOK_SELECTED,
  LECTURE_SELECTED,
} from './types';

export const logIn = data => {
  return async dispatch => {
    try {
      const res = await axios.post('http://localhost:5000/users/login', data);
      console.log('res', res);
      const token = res.data.token;
      dispatch({
        type: AUTH_LOG_IN,
        payload: token,
      });

      localStorage.setItem('JWT_TOKEN', token);
    } catch (e) {
      dispatch({
        type: AUTH_ERROR,
        payload: e.message,
      });
      console.log('err', e);
    }
  };
};

export const register = data => {
  return async dispatch => {
    try {
      const res = await axios.post(
        'http://localhost:5000/users/register',
        data
      );
      console.log('res', res);

      dispatch({
        type: AUTH_REGISTER,
        payload: res.data,
      });

      localStorage.setItem('JWT_TOKEN', res.data.token);
    } catch (e) {
      dispatch({
        type: AUTH_ERROR,
        payload: e.message,
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
      payload: '',
    });
  };
};

export const getDataFromDb = () => {
  return async dispatch => {
    try {
      const res = await axios.get(
        'http://localhost:5000/dashboard/books/most-popular-books'
      );
      console.log('res', res);
      dispatch({
        type: DATA_REQUEST,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: DATA_REQUEST_ERROR,
        payload: e.message,
      });
      console.log('err', e);
    }
  };
};

export const setFilter = newFilter => {
  return dispatch => {
    dispatch({
      type: FILTER_SELECTED,
      payload: newFilter,
    });
    console.log(newFilter);
  };
};

export const searchForLecture = data => {
  return async dispatch => {
    console.log('request body', data);
    try {
      const res = await axios.post(
        'http://localhost:5000/dashboard/books/search-by-lecture',
        data
      );
      console.log('res', res);
      dispatch({
        type: SEARCH,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: SEARCH_ERROR,
        payload: e.message,
      });
      console.log('err', e);
    }
  };
};

export const setBook = book => {
  return async dispatch => {
    console.log('selectedBook action called', book);
    dispatch({
      type: BOOK_SELECTED,
      payload: book,
    });
  };
};

export const setLecture = lecture => {
  return async dispatch => {
    console.log('selectedLecture action called', lecture);
    dispatch({
      type: LECTURE_SELECTED,
      payload: lecture,
    });
  };
};

export const postComment = data => {
  return async dispatch => {
    console.log('post comment body', data);
    try {
      const res = await axios.post(
        'http://localhost:5000/users/post-comment',
        data
      );
      console.log('res', res);
      dispatch({
        type: POST_COMMENT,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: COMMENT_ERROR,
        payload: e.message,
      });
      console.log('err', e);
    }
  };
};

export const getComment = data => {
  return async dispatch => {
    try {
      const res = await axios.post(
        'http://localhost:5000/users/get-comment',
        data
      );
      console.log('res', res);
      dispatch({
        type: GET_COMMENT,
        payload: res,
      });
    } catch (e) {
      dispatch({
        type: COMMENT_ERROR,
        payload: e.message,
      });
      console.log('err', e);
    }
  };
};
