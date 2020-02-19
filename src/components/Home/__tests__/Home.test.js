import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRedux from 'utils/renderWithRedux';
import withRouter from 'utils/withRouter';
import { introActions } from 'store/modules/intro';
import HomeIntro from '../HomeIntro/HomeIntro';

describe('Home 컴포넌트 테스트', () => {
  test('컨텐츠가 스토어로 전달된 값과 동일해야 함', () => {
    const { getByTestId, store } = renderWithRedux(withRouter(<HomeIntro />));
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

  test('카드를 눌렀을 때 링크가 정상 동작해야 함', () => {
    const { getByTestId, store } = renderWithRedux(withRouter(<HomeIntro />));

    store.dispatch(
      introActions.success({
        result: { id: 13 },
      }),
    );

    const moreButton = getByTestId('more-link');
    fireEvent.click(moreButton);
    expect(getByTestId('location-display')).toHaveTextContent('/detail/13');
  });
});
