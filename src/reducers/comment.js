import {POST_COMMENT, GET_COMMENT, COMMENT_ERROR} from '../actions/types';

const DEFAULT_STATE = {
  text: '',
  username: '',
  comments: [],
};

function refreshPage() {
  window.location.reload(false);
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case POST_COMMENT:
      refreshPage();
      console.log('reducer got post comment action', action.payload.data);
      return {
        ...state,
        text: action.payload.message,
        username: action.payload.authorID,
        errorMessage: '',
      };
    case GET_COMMENT:
      console.log('reducer got get comment action', action.payload);
      return {...state, comments: action.payload.data, errorMessage: ''};
    case COMMENT_ERROR:
      console.log('reducer got error comment action');
      return {...state, errorMessage: action.payload};
    default:
      return state;
  }
};
