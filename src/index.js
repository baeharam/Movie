import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'store/index';
import { introActions } from 'store/modules/intro';
import App from './App';

const store = configureStore();
store.dispatch(introActions.request());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
