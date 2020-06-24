import {BOOK_RATING, BOOK_RATING_ERROR} from '../actions/types';

const DEFAULT_STATE = {
  myRating: 0,
  rated: false,
  averageRating: 0,
  numberOfVoters: 0,
  errorMessage: ''
};

function refreshPage() {
  window.location.reload(false);
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case BOOK_RATING:
      refreshPage();
      console.log('reduce got rate action', action.payload);
      return {...state, myRating: action.payload.response.rating, averageRating: action.payload.response.newValue, numberOfVoters: action.payload.response.numberOfVoters, rated: !!action.payload.response.rating};
    case BOOK_RATING_ERROR:
      return {...state, errorMessage: action.payload};
      default:
      return state;
  }
};
