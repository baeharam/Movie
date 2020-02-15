import { takeEvery } from 'redux-saga/effects';
import createRequestSaga from 'utils/createRequestSaga';
import { aroundActions } from 'store/modules/around';
import api from 'store/apis/around';

const saga = createRequestSaga(aroundActions, api);

export default function* watchAround() {
  yield takeEvery(aroundActions.REQUEST, saga);
}
