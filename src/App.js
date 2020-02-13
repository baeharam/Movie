import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from 'styles/global';
import { Home, Around } from 'pages/index';

const App = () => {
  return (
    <>
      <GlobalStyle />
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
