import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRedux from 'utils/renderWithRedux';
import withRouter from 'utils/withRouter';
import { searchActions } from 'store/modules/search';
import SearchContent from '../SearchContent';

describe('Search 컴포넌트 테스트', () => {
  test('검색결과가 잘 표시되어야 함', () => {
    const { store, getByTestId } = renderWithRedux(
      withRouter(<SearchContent />),
    );
    store.dispatch(
      searchActions.success({
        result: [
          {
            id: 1,
            title: '테스트 제목',
          },
        ],
      }),
    );

    expect(getByTestId('search-item-link')).toHaveTextContent('테스트 제목');
  });

  test('검색결과의 링크가 정상 동작해야 함', () => {
    const { store, getByTestId } = renderWithRedux(
      withRouter(<SearchContent />),
    );
    store.dispatch(
      searchActions.success({
        result: [
          {
            id: 1,
            title: '테스트 제목',
          },
        ],
      }),
    );

    const searchItemLink = getByTestId('search-item-link');
    fireEvent.click(searchItemLink);
    expect(getByTestId('location-display')).toHaveTextContent(`/detail/${1}`);
  });
});
