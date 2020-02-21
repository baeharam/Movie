import { combineReducers } from 'redux';
import intro from './intro';
import loading from './loading';
import around from './around';
import overlay from './overlay';
import detail from './detail';
import search from './search';

export default combineReducers({
  intro,
  loading,
  around,
  overlay,
  detail,
  search,
});
