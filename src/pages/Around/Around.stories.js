import React from 'react';
import withReduxDecorator from 'utils/withReduxDecorator';
import { aroundActions } from 'store/modules/around';
import { startLoading, finishLoading } from 'store/modules/loading';
import Around from './Around';

export default {
  title: 'pages / Around',
  component: Around,
};

const cannedActions = [
  {
    name: '둘러보기 성공',
    action: aroundActions.success({
      result: [
        {
          id: 1,
          title: '겨울왕국',
          backdropPath:
            'https://image.tmdb.org/t/p/original/xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg',
          rating: 9.4,
        },
      ],
    }),
  },
  {
    name: '둘러보기 로딩 시작',
    action: startLoading({ type: aroundActions.TYPE }),
  },
  {
    name: '둘러보기 로딩 종료',
    action: finishLoading({ type: aroundActions.TYPE }),
  },
];

export const around = () => <Around />;
around.story = {
  name: '둘러보기 - Redux',
  decorators: [storyFn => withReduxDecorator({}, cannedActions)(storyFn)],
};
