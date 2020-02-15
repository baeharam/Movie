import { combineReducers } from 'redux';
import intro from './intro';
import loading from './loading';
import around from './around';

export default combineReducers({
  intro,
  loading,
  around,
});
