import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRedux from 'utils/renderWithRedux';
import withRouter from 'utils/withRouter';
import { aroundActions } from 'store/modules/around';
import AroundCardList from '../AroundCardList/AroundCardList';
import 'jest-styled-components';

describe('Around 컴포넌트 테스트', () => {
  test('컨텐츠가 스토어로 전달된 값과 동일해야 함', () => {
    const { getByTestId, store } = renderWithRedux(
      withRouter(<AroundCardList />, '/around'),
    );
    store.dispatch(
      aroundActions.success({
        result: [
          {
            id: 13,
            title: 'testTitle',
            backdropPath: 'testBackdropPath',
            rating: 9.4,
          },
        ],
      }),
    );
    expect(getByTestId('around-backdropPath')).toHaveStyle(
      'background-image: url(testBackdropPath)',
    );
    expect(getByTestId('around-title')).toHaveTextContent('testTitle');
  });

  test('카드를 눌렀을 때 링크가 정상 동작해야 함', () => {
    const { getByTestId, store } = renderWithRedux(
      withRouter(<AroundCardList />, '/around'),
    );

    store.dispatch(
      aroundActions.success({
        result: [
          {
            id: 13,
            title: 'testTitle',
            backdropPath: 'testBackdropPath',
            rating: 9.4,
          },
        ],
      }),
    );

    const item = getByTestId('item-link');
    fireEvent.click(item);
    expect(getByTestId('location-display')).toHaveTextContent('/detail/13');
  });
});
