import React from 'react';
import { startLoading, finishLoading } from 'store/modules/loading';
import { introActions } from 'store/modules/intro';
import withReduxDecorator from 'utils/withReduxDecorator';
import Home from './Home';

export default {
  title: 'pages / Home',
  component: Home,
};

const cannedActions = [
  {
    name: '홈 성공',
    action: introActions.success({
      result: {
        id: 120,
        title: '스토리북 제목',
        tagline: '스토리북 한줄',
        backdropPath:
          'https://image.tmdb.org/t/p/original/uozb2VeD87YmhoUP1RrGWfzuCrr.jpg',
      },
    }),
  },
  {
    name: '홈 로딩 시작',
    action: startLoading({ type: introActions.TYPE }),
  },
  {
    name: '홈 로딩 종료',
    action: finishLoading({ type: introActions.TYPE }),
  },
];

export const home = () => <Home />;
home.story = {
  name: '홈 - Redux',
  decorators: [storyFn => withReduxDecorator({}, cannedActions)(storyFn)],
};
