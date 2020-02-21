import React from 'react';
import StoryRouter from 'storybook-react-router';
import Around from './Around';

export default {
  title: 'pages | Around',
  component: Around,
};

export const normal = () => <Around />;
normal.story = {
  name: '보통 상태',
  decorators: [storyFn => StoryRouter()(storyFn)],
};
