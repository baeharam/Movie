import React from 'react';
import renderWithRedux from 'utils/renderWithRedux';
import { aroundActions } from 'store/modules/around';
import AroundCardList from '../AroundCardList/AroundCardList';
import 'jest-styled-components';

describe('Around 컴포넌트 테스트', () => {
  test('컨텐츠가 스토어로 전달된 값과 동일해야 함', () => {
    const { getByTestId, store } = renderWithRedux(<AroundCardList />);
    store.dispatch(
      aroundActions.success({
        result: [
          { title: 'testTitle', backdropPath: 'testBackdropPath', rating: 9.4 },
        ],
      }),
    );
    expect(getByTestId('around-backdropPath')).toHaveStyle(
      'background-image: url(testBackdropPath)',
    );
    expect(getByTestId('around-title')).toHaveTextContent('testTitle');
  });
});
