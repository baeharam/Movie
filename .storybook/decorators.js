import React from 'react';
import GlobalStyle from 'styles/global';

const withGlobalStyle = (storyFn) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);

export default withGlobalStyle;
