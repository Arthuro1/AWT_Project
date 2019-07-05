import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import authReducer from "./authentification"
import dataRequestReducer from './dataRequest'


export default combineReducers({
    form: formReducer,
    auth: authReducer,
    dataRequest: dataRequestReducer
})
