import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './authentification';
import dataRequestReducer from './dataRequest';
import filter from './filter';
import search from './search';
import selectBook from './selectBook';
import comment from './comment';
import selectLecture from './selectLecture';
import rate from './rate';
export default combineReducers({
  form: formReducer,
  auth: authReducer,
  dataRequest: dataRequestReducer,
  filter: filter,
  search: search,
  book: selectBook,
  lecture: selectLecture,
  comment: comment,
  rate: rate,
});
