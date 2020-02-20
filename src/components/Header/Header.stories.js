import React from 'react';
import { primaryColor } from 'styles/variables';
import StoryRouter from 'storybook-react-router';
import Header from './Header';

export default {
  title: 'components | Header',
  component: Header,
  decorators: [storyFn => StoryRouter()(storyFn)],
};

export const black = () => <Header />;
black.story = {
  name: '검은배경',
  decorators: [
    storyFn => (
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          height: '100vh',
        }}
      >
        {storyFn()}
      </div>
    ),
  ],
};

export const white = () => <Header color={primaryColor} />;
white.story = {
  name: '하얀 배경',
};
