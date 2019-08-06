import {LECTURE_SELECTED} from '../actions/types';

const DEFAULT_STATE = {
  oneLecture: '',
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case LECTURE_SELECTED:
      console.log('reducer select lecture got called', action.payload);
      return {...state, oneLecture: action.payload};
    default:
      return state;
  }
};
