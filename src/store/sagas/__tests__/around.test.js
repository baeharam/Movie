import { runSaga } from 'redux-saga';
import createRequestSaga from 'utils/createRequestSaga';
import { aroundActions } from 'store/modules/around';

describe('around 사가 테스트', () => {
  test('API 성공시 반환이 정상 작동해야 함', async () => {
    const mockedData = [
      {
        backdropPath: 'testBackdropPath',
        title: 'testTitle',
        rating: '9.4',
      },
    ];
    const mockedAPI = jest.fn(() => Promise.resolve(mockedData));
    const mockedSaga = createRequestSaga(aroundActions, mockedAPI);

    const dispatchedActions = [];
    const mockedStore = {
      getState: () => ({ result: [] }),
      dispatch: action => {
        dispatchedActions.push(action);
      },
    };

    await runSaga(
      mockedStore,
      mockedSaga,
      aroundActions.request({ type: 'testType' }),
    ).toPromise();

    expect(mockedAPI.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(
      aroundActions.success({ result: mockedData }),
    );
  });

  test('API 실패시 반환이 정상 작동해야 함', async () => {
    const mockedAPI = jest.fn(() => {
      throw new Error('Test error');
    });
    const mockedSaga = createRequestSaga(aroundActions, mockedAPI);

    const dispatchedActions = [];
    const mockedStore = {
      getState: () => ({ result: [] }),
      dispatch: action => {
        dispatchedActions.push(action);
      },
    };

    await runSaga(mockedStore, mockedSaga, aroundActions.REQUEST).toPromise();

    expect(mockedAPI.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(
      aroundActions.failure({ error: 'Error: Test error' }),
    );
  });
});
