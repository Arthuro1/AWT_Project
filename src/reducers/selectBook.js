import {BOOK_SELECTED} from '../actions/types';

const DEFAULT_STATE = {
  oneBook: '',
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case BOOK_SELECTED:
      console.log('reducer select book got called', action.payload);
      return {...state, oneBook: action.payload};
    default:
      return state;
  }
};
