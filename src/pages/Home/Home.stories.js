import React from 'react';
import withRouter from 'utils/withRouter';
import withRedux from 'utils/withRedux';
import Home from './Home';

export default {
  title: 'pages | Home',
  component: Home,
};

export const normal = () => withRedux(withRouter(<Home />));
