import {BOOK_SELECTED, GET_BOOK_ERROR} from '../actions/types';

const DEFAULT_STATE = {
  oneBook: '',
  errorMessage: ''
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case BOOK_SELECTED:
      console.log('reducer select book got called', action.payload);
      return {...state, oneBook: action.payload};
    case GET_BOOK_ERROR:
      console.log('reducer error select book got called', action.payload);
      return {...state, errorMessage: action.payload};
    default:
      return state;
  }
};
