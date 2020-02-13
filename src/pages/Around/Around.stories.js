import React from 'react';
import withTestRouter from 'utils/withTestRouter';
import Around from './Around';

export default {
  title: 'pages | Around',
  component: Around,
};

export const normal = () => withTestRouter(<Around />, '/around');
