import { all, call } from 'redux-saga/effects';
import intro from './intro';

export default function* rootSaga() {
  yield all([call(intro)]);
}
