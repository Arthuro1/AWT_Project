import {SEARCH_ERROR, SEARCH} from '../actions/types';

const DEFAULT_STATE = {
  data: [],
  errorMessage: '',
};

function refreshPage() {
  window.location.reload(false);
}
export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SEARCH:
      refreshPage();
      console.log('search reducer got called', action.payload);
      return {...state, data: action.payload, errorMessage: ''};
    case SEARCH_ERROR:
      console.log('search reducer got error ');
      return {...state, errorMessage: action.payload};
    default:
      return state;
  }
};
