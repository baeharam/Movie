import React from 'react';
import { addDecorator } from '@storybook/react';
import { Provider } from 'react-redux';
import configureStore from 'store/index';
import GlobalStyle from 'styles/global';

const withGlobalStyle = (storyFn) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);

const store = configureStore();

addDecorator(withGlobalStyle);
addDecorator(storyFn => <Provider store={store}>
  {storyFn()}
</Provider> );