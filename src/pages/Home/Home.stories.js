import React from 'react';
import withTestRouter from 'utils/withTestRouter';
import Home from './Home';

export default {
  title: 'pages | Home',
  component: Home,
};

export const normal = () => withTestRouter(<Home />);
