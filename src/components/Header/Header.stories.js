import React from 'react';
import { primaryColor } from 'styles/variables';
import withRouter from 'utils/withRouter';
import withRedux from 'utils/withRedux';
import { Container } from 'pages/Home/Home.style';
import Header from './Header';

export default {
  title: 'components | Header',
  component: Header,
};

export const black = () => withRedux(withRouter(<Header />));
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

export const white = () =>
  withRedux(withRouter(<Header color={primaryColor} />));
export const withBackground = () =>
  withRedux(
    withRouter(
      <>
        <Header />
        <Container />
      </>,
    ),
  );
