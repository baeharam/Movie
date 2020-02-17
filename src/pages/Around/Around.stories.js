import React from 'react';
import withRouter from 'utils/withRouter';
import withRedux from 'utils/withRedux';
import Around from './Around';

export default {
  title: 'pages | Around',
  component: Around,
};

export const normal = () => withRedux(withRouter(<Around />, '/around'));
