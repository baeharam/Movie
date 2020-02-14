import { put, call } from 'redux-saga/effects';
import { startLoading, finishLoading } from 'store/modules/loading';

export default function createRequestSaga(actions, api) {
  return function* requestSaga({ payload }) {
    try {
      yield put(startLoading({ type: actions.TYPE }));
      const result = yield call(api, payload);
      yield put(actions.success({ result }));
    } catch (e) {
      yield put(actions.failure({ error: `${e.name}: ${e.message}` }));
    } finally {
      yield put(finishLoading({ type: actions.TYPE }));
    }
  };
}
