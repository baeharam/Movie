import { all, call } from 'redux-saga/effects';
import intro from './intro';
import around from './around';

export default function* rootSaga() {
  yield all([call(intro), call(around)]);
}
