import {AUTH_ERROR, AUTH_REGISTER} from "../actions/types";

const DEFAULT_STATE = {
    isAuthentificated: false,
    token: '',
    errorMessage: ''
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case AUTH_REGISTER:
            return {...state, token: action.payload, isAuthentificated: true, errorMessage: ''};
        case AUTH_ERROR:
            return {...state, errorMessage: action.payload};
        default:
            return state
    }
    return state;
}
