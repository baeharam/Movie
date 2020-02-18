import createRequestSaga from 'utils/createRequestSaga';
import { detailActions } from 'store/modules/detail';
import { takeEvery } from 'redux-saga/effects';
import detailAPI from 'store/apis/detail';

const saga = createRequestSaga(detailActions, detailAPI);

export default function* watchDetail() {
  yield takeEvery(detailActions.REQUEST, saga);
}
