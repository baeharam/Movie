import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import GlobalStyle from 'styles/global';
import { Home, Around } from 'pages/index';

const App = () => {
  const { isOpen } = useSelector(state => state.overlay);

  return (
    <>
      <GlobalStyle isOpen={isOpen} />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/around">
            <Around />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
