import {BOOK_RATING} from '../actions/types';

const DEFAULT_STATE = {
  rated: false,
  rating: 0,
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case BOOK_RATING:
      console.log('reduce got rate action', action.payload);
      return {...state, rating: action.payload, rated: true};
    default:
      return state;
  }
};
