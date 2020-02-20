import React from 'react';
import StoryRouter from 'storybook-react-router';
import Around from './Around';
import { startLoading } from 'store/modules/loading';
import { aroundActions } from 'store/modules/around';
import store from 'index';

export default {
  title: 'pages | Around',
  component: Around,
};

store.dispatch(startLoading({ type: aroundActions.TYPE }));
export const normal = () => <Around />;
normal.story = {
  name: '보통 상태',
  decorators: [storyFn => StoryRouter()(storyFn)],
};


