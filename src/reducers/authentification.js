import {AUTH_ERROR, AUTH_LOG_IN, AUTH_LOG_OUT, AUTH_REGISTER} from "../actions/types";

const DEFAULT_STATE = {
    isAuthentificated: false,
    token: '',
    user:{},
    errorMessage: ''
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case AUTH_REGISTER:
            return {...state, user: action.payload.user, token: action.payload.token, isAuthentificated: true, errorMessage: ''};
        case AUTH_LOG_IN:
            return {...state,  user: action.payload.user, token: action.payload.token, isAuthentificated: true, errorMessage: ''};
        case AUTH_LOG_OUT:
            return {...state, user:{}, token: action.payload.token, isAuthentificated: false, errorMessage: ''};
        case AUTH_ERROR:
            return {...state, errorMessage: action.payload};
        default:
            return state
    }
}
