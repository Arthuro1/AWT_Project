import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './authentification';
import dataRequestReducer from './dataRequest';
import filter from './filter';
import search from './search';
import book from './book';
import comment from './comment';
import selectLecture from './selectLecture';
import rate from './rate';

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  dataRequest: dataRequestReducer,
  filter: filter,
  search: search,
  book: book,
  lecture: selectLecture,
  comment: comment,
  rate: rate,
});
