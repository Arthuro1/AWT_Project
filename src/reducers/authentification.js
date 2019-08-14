import {
  AUTH_ERROR,
  AUTH_LOG_IN,
  AUTH_LOG_OUT,
  AUTH_REGISTER,
} from '../actions/types';
import jwt from 'jsonwebtoken';

const DEFAULT_STATE = {
  isAuthentificated: false,
  token: '',
  user: {},
  errorMessage: '',
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case AUTH_REGISTER:
      return {
        ...state,
        user: jwt.decode(action.payload),
        token: action.payload.token,
        isAuthentificated: true,
        errorMessage: '',
      };
    case AUTH_LOG_IN:
      return {
        ...state,
        user: jwt.decode(action.payload),
        token: action.payload.token,
        isAuthentificated: true,
        errorMessage: '',
      };
    case AUTH_LOG_OUT:
      return {
        ...state,
        user: {},
        token: action.payload.token,
        isAuthentificated: false,
        errorMessage: '',
      };
    case AUTH_ERROR:
      console.log('got some Error during authentification', action.payload);
      return {...state, errorMessage: action.payload};
    default:
      return state;
  }
};
