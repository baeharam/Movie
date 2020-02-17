import React from 'react';
import renderWithRedux from 'utils/renderWithRedux';
import { introActions } from 'store/modules/intro';
import HomeIntro from '../HomeIntro/HomeIntro';

describe('Home 컴포넌트 테스트', () => {
  test('컨텐츠가 스토어로 전달된 값과 동일해야 함', () => {
    const { getByTestId, store } = renderWithRedux(<HomeIntro />);
    store.dispatch(
      introActions.success({
        result: {
          title: 'testTitle',
          tagline: 'testTagline',
        },
      }),
    );
    expect(getByTestId('home-title')).toHaveTextContent('testTitle');
    expect(getByTestId('home-tagline')).toHaveTextContent('testTagline');
  });
});
