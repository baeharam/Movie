import React from 'react';
import { withKnobs, color } from '@storybook/addon-knobs';
import { primaryColor } from 'styles/variables';
import withReduxDecorator from 'utils/withReduxDecorator';
import { open, close } from 'store/modules/overlay';
import Header from './Header';

export default {
  title: 'components / Header',
  component: Header,
  decorators: [withKnobs],
};

const cannedActions = [
  {
    name: '오버레이 열림',
    action: open(),
  },
  {
    name: '오버레이 닫힘',
    action: close(),
  },
];

export const header = () => {
  const mainColor = color('color', primaryColor);
  const bgColor = color('bgColor', 'white');

  return <Header color={mainColor} bgColor={bgColor} />;
};
header.story = {
  name: '헤더 - Redux',
  decorators: [storyFn => withReduxDecorator({}, cannedActions)(storyFn)],
};
