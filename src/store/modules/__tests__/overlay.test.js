import overlay, { open, close } from '../overlay';

describe('overlay 리듀서 테스트', () => {
  let state = overlay(undefined, {});

  test('초기 상태를 반환해야 함', () => {
    expect(state.isOpen).toBeFalsy;
  });

  test('열려있는 상태를 반환해야 함', () => {
    state = overlay(state, open());
    expect(state.isOpen).toBeTruthy;
  });

  test('닫혀있는 상태를 반환해야 함', () => {
    state = overlay(state, open());
    state = overlay(state, close());
    expect(state.isOpen).toBeFalsy;
  });
});
