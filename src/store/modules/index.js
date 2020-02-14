import { combineReducers } from 'redux';
import intro from './intro';
import loading from './loading';

export default combineReducers({
  intro,
  loading,
});
