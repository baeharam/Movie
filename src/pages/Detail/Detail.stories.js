import React from 'react';
import { startLoading, finishLoading } from 'store/modules/loading';
import { detailActions } from 'store/modules/detail';
import withReduxDecorator from 'utils/withReduxDecorator';
import Detail from './Detail';

export default {
  title: 'pages / Detail',
  component: Detail,
};

const cannedActions = [
  {
    name: '영화상세 성공',
    action: detailActions.success({
      result: {
        title: '스토리북 제목',
        tagline: '스토리북 한줄 테스트',
        releaseDate: '2019-09-02',
        runtime: 120,
        rating: 9.4,
        genres: ['스토리북1', '스토리북2'],
        overview: '스토리북 오버뷰 테스트',
        posterPath:
          'https://image.tmdb.org/t/p/w500/guuuC6YZrk2HTozNmoJ29PUfGxo.jpg',
        backdropPath:
          'https://image.tmdb.org/t/p/original/yFRpUmsreYO5Bc0HVBTsJsHIIox.jpg',
        images: [
          'https://image.tmdb.org/t/p/w780/yFRpUmsreYO5Bc0HVBTsJsHIIox.jpg',
        ],
        videos: [
          {
            thumbnail: 'http://i.ytimg.com/vi/5P8R2zAhEwg/sddefault.jpg',
            path: 'https://www.youtube.com/watch?v=5P8R2zAhEwg',
          },
        ],
        similars: [
          {
            title: '스토리북 비슷한 영화',
            posterPath:
              'https://image.tmdb.org/t/p/w500/EbM7hHZgV46OV8ooLudDPRZ1At.jpg',
          },
        ],
        casts: [
          {
            name: '스토리북',
            role: '주연',
            profilePath:
              'https://image.tmdb.org/t/p/w500/sMd7ba1hWVm5E1Lf5VYcj82ouod.jpg',
          },
        ],
      },
    }),
  },
  {
    name: '영화상세 로딩 시작',
    action: startLoading({ type: detailActions.TYPE }),
  },
  {
    name: '영화상세 로딩 종료',
    action: finishLoading({ type: detailActions.TYPE }),
  },
];

export const detail = () => <Detail match={{ params: { id: 330457 } }} />;

detail.story = {
  name: '영화상세 - Redux',
  decorators: [storyFn => withReduxDecorator({}, cannedActions)(storyFn)],
};
