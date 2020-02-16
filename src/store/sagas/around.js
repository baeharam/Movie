import { takeEvery } from 'redux-saga/effects';
import createRequestSaga from 'utils/createRequestSaga';
import { aroundActions } from 'store/modules/around';
import aroundAPI from 'store/apis/around';

const saga = createRequestSaga(aroundActions, aroundAPI);

export default function* watchAround() {
  yield takeEvery(aroundActions.REQUEST, saga);
}
