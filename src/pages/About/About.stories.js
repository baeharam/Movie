import React from 'react';
import withReduxDecorator from 'utils/withReduxDecorator';
import About from './About';

export default {
  title: 'pages / About',
  component: About,
};

export const about = () => <About />;
about.story = {
  name: '소개',
  decorators: [storyFn => withReduxDecorator()(storyFn)],
};
