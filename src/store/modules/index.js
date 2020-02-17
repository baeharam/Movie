import { combineReducers } from 'redux';
import intro from './intro';
import loading from './loading';
import around from './around';
import overlay from './overlay';

export default combineReducers({
  intro,
  loading,
  around,
  overlay,
});
