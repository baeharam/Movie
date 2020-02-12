import React from 'react';
import { addDecorator } from '@storybook/react';
import GlobalStyle from 'styles/global';

const withGlobalStyle = (storyFn) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);

addDecorator(withGlobalStyle);