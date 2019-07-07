import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import authReducer from "./authentification"
import dataRequestReducer from './dataRequest'
import filter from './filter'

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    dataRequest: dataRequestReducer,
    filter: filter
})
