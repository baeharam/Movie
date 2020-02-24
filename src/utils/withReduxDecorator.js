import addons from '@storybook/addons';
import withRedux from 'addon-redux/withRedux';
import withReduxEnhancer from 'addon-redux/enhancer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from 'store/modules/index';

const store = createStore(rootReducer, {}, withReduxEnhancer);
const withReduxSettings = {
  Provider,
  store,
};

const withReduxDecorator = (state = {}, actions = []) =>
  withRedux(addons)(
    (() => {
      withReduxSettings.state = state;
      withReduxSettings.actions = actions;
      return withReduxSettings;
    })(),
  );
export default withReduxDecorator;
