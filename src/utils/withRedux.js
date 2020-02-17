import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'store/index';

const store = configureStore();

const withRedux = component => <Provider store={store}>{component}</Provider>;

export default withRedux;
