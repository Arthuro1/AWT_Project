import {POST_COMMENT, GET_COMMENT, COMMENT_ERROR} from '../actions/types'


const DEFAULT_STATE = {
    text: '',
    username: '',
    comments: []
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case POST_COMMENT:
            console.log('reduce got  post comment action', action.payload);
            return {...state, text: action.payload.message, username: action.payload.authorID, errorMessage: ''};
        case GET_COMMENT:
            console.log('reduce got get comment action', action.payload);
            return {...state, comments: action.payload, errorMessage: ''};
        case COMMENT_ERROR:
            console.log('reducer got error comment action');
            return {...state, errorMessage: action.payload};
        default:
            return state
    }
}
