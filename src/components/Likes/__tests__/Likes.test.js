import React from 'react';
import renderWithRedux from 'utils/renderWithRedux';
import withRouter from 'utils/withRouter';
import LikesList from '../LikesList';

describe('Likes 컴포넌트 테스트', () => {
  test('좋아요 한 목록들이 표시되어야 함', () => {
    localStorage.setItem(290859, `{"title": "testTitle"}`);
    const { getByText } = renderWithRedux(withRouter(<LikesList />, '/likes'));
    expect(getByText('testTitle')).toBeInTheDocument;
  });
});
