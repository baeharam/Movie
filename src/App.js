import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from 'styles/global';
import { Home } from 'pages/index';
import Header from 'components/Header/Header';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
