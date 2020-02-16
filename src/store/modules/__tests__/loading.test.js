import loading, { startLoading, finishLoading } from '../loading';

describe('loading 리듀서 테스트', () => {
  let state = loading(undefined, {});

  test('초기 상태를 반환해야 함', () => {
    expect(Object.entries(state)).toHaveLength(0);
    expect(state.constructor).toBe(Object);
  });

  test('로딩 시작 상태를 반환해야 함', () => {
    state = loading(state, startLoading({ type: 'testType' }));
    expect(state.testType).toBeTruthy;
  });

  test('로딩 종료 상태를 반환해야 함', () => {
    state = loading(state, finishLoading({ type: 'testType' }));
    expect(state.testType).toBeFalsy;
  });
});
