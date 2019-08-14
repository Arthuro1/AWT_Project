import {DATA_REQUEST, DATA_REQUEST_ERROR} from '../actions/types';

const DEFAULT_STATE = {
  data: [],
  errorMessage: '',
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case DATA_REQUEST:
      console.log('reduce got  data request action', action.payload);
      return {...state, data: action.payload, errorMessage: ''};
    case DATA_REQUEST_ERROR:
      console.log('reducer got error data request action');
      return {...state, errorMessage: action.payload};
    default:
      return state;
  }
};
