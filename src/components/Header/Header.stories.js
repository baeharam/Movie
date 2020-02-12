import React from 'react';
import { primaryColor } from 'styles/variables';
import withTestRouter from 'utils/withTestRouter';
import { Container } from 'pages/Home/Home.style';
import Header from './Header';

export default {
  title: 'components | Header',
  component: Header,
};

export const black = () => withTestRouter(<Header />);
black.story = {
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

export const white = () => withTestRouter(<Header color={primaryColor} />);
export const withBackground = () =>
  withTestRouter(
    <>
      <Header />
      <Container />
    </>,
  );
