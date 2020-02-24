import React from 'react';
import { startLoading, finishLoading } from 'store/modules/loading';
import { searchActions } from 'store/modules/search';
import withReduxDecorator from 'utils/withReduxDecorator';
import Search from './Search';

export default {
  title: 'pages / Search',
  component: Search,
};

const cannedActions = [
  {
    name: '검색 성공',
    action: searchActions.success({
      result: [
        {
          id: 1,
          title: '스토리북 검색결과1',
        },
        {
          id: 2,
          title: '스토리북 검색결과2',
        },
      ],
    }),
  },
  {
    name: '검색 로딩 시작',
    action: startLoading({ type: searchActions.TYPE }),
  },
  {
    name: '검색 로딩 종료',
    action: finishLoading({ type: searchActions.TYPE }),
  },
];

export const search = () => <Search />;
search.story = {
  name: '검색 - Redux',
  decorators: [storyFn => withReduxDecorator({}, cannedActions)(storyFn)],
};
