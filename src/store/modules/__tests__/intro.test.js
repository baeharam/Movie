import intro, { introActions } from '../intro';

describe('intro 리듀서 테스트', () => {
  let state = intro(undefined, {});

  test('초기 상태를 반환해야 함', () => {
    expect(state.introSuccess).toBeFalsy;
    expect(state.introError).toBeEmpty;
    expect(state.result).toStrictEqual({
      id: '',
      backdropPath: '',
      title: '',
      tagline: '',
    });
  });

  test('성공 상태를 반환해야 함', () => {
    state = intro(
      state,
      introActions.success({
        result: {
          backdropPath: 'testBackdropPath',
          title: 'testTitle',
          tagline: 'testTagline',
        },
      }),
    );

    expect(state.introSuccess).toBeTruthy;
    expect(state.result).toStrictEqual({
      backdropPath: 'testBackdropPath',
      title: 'testTitle',
      tagline: 'testTagline',
    });
  });

  test('실패 상태를 반환해야 함', () => {
    state = intro(
      state,
      introActions.failure({
        error: 'testError',
      }),
    );

    expect(state.introError).toBe('testError');
  });
});
