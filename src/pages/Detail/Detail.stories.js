import React from 'react';
import StoryRouter from 'storybook-react-router';
import Detail from './Detail';

export default {
  title: 'pages | Detail',
  component: Detail,
};

export const normal = () => <Detail match={{ params: { id: 330457 } }} />;

normal.story = {
  name: '예시: 겨울왕국',
  decorators: [storyFn => StoryRouter()(storyFn)],
};
