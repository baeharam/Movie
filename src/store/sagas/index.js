import { all, call } from 'redux-saga/effects';
import intro from './intro';
import around from './around';
import detail from './detail';
import search from './search';

export default function* rootSaga() {
  yield all([call(intro), call(around), call(detail), call(search)]);
}
