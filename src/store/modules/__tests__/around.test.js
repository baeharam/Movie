import around, { aroundActions } from '../around';

describe('around 리듀서 테스트', () => {
  let state = around(undefined, {});

  test('초기 상태를 반환해야 함', () => {
    expect(state.aroundSuccess).toBeFalsy;
    expect(state.aroundError).toBeEmpty;
    expect(state.result).toStrictEqual([
      {
        id: '',
        title: '',
        backdropPath: '',
        rating: 0.0,
      },
    ]);
  });

  test('성공 상태를 반환해야 함', () => {
    state = around(
      state,
      aroundActions.success({
        result: [
          {
            backdropPath: 'testBackdropPath',
            title: 'testTitle',
            rating: '9.4',
          },
        ],
      }),
    );

    expect(state.aroundSuccess).toBeTruthy;
    expect(state.result).toStrictEqual([
      {
        backdropPath: 'testBackdropPath',
        title: 'testTitle',
        rating: '9.4',
      },
    ]);
  });

  test('실패 상태를 반환해야 함', () => {
    state = around(
      state,
      aroundActions.failure({
        error: 'testError',
      }),
    );

    expect(state.aroundError).toBe('testError');
  });
});
