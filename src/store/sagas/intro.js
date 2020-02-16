import createRequestSaga from 'utils/createRequestSaga';
import { introActions } from 'store/modules/intro';
import { takeEvery } from 'redux-saga/effects';
import introAPI from 'store/apis/intro';

const saga = createRequestSaga(introActions, introAPI);

export default function* watchIntro() {
  yield takeEvery(introActions.REQUEST, saga);
}
