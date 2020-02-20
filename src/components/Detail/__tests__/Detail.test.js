import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRedux from 'utils/renderWithRedux';
import withRouter from 'utils/withRouter';
import { detailActions } from 'store/modules/detail';
import { DetailVideos, DetailSimilars, DetailIntro } from '../index';

describe('Detail 컴포넌트 테스트', () => {
  test('좋아요 하면 활성화되어야 함', () => {
    const { store, getByTestId } = renderWithRedux(withRouter(<DetailIntro />));
    const id = 286217;
    store.dispatch(
      detailActions.success({
        detailSuccess: true,
        result: { id },
      }),
    );

    const likeButton = getByTestId('like-button');
    fireEvent.click(likeButton);
    expect(likeButton).toHaveTextContent('좋아요 취소');
    fireEvent.click(likeButton);
    expect(likeButton).toHaveTextContent('좋아요');
  });

  test('예고편 링크가 유튜브 주소를 가져야 함', () => {
    const { store, getByTestId } = renderWithRedux(
      withRouter(<DetailVideos />),
    );
    const youtubePath = 'https://www.youtube.com/watch?v=v8C0VHuUHw0';
    store.dispatch(
      detailActions.success({
        result: {
          videos: [{ path: youtubePath }],
        },
      }),
    );

    const videoLink = getByTestId('video-link');
    expect(videoLink).toHaveAttribute('href', youtubePath);
  });

  test('비슷한 영화 클릭시 해당 영화로 이동해야 함', () => {
    const { store, getByTestId } = renderWithRedux(
      withRouter(<DetailSimilars />),
    );
    store.dispatch(
      detailActions.success({
        result: {
          similars: [
            {
              title: '마션',
              posterPath:
                'https://image.tmdb.org/t/p/w500/n08qkAwvlaeXIG7VGB9lLTBF36u.jpg',
              id: 286217,
            },
          ],
        },
      }),
    );

    const similarLink = getByTestId('similar-link');
    fireEvent.click(similarLink);
    expect(getByTestId('location-display')).toHaveTextContent('/detail/286217');
  });
});
