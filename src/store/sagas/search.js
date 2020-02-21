import { takeEvery } from 'redux-saga/effects';
import { searchActions } from 'store/modules/search';
import createRequestSaga from 'utils/createRequestSaga';
import searchAPI from 'store/apis/search';

const saga = createRequestSaga(searchActions, searchAPI);

export default function* watchSearch() {
  yield takeEvery(searchActions.REQUEST, saga);
}
