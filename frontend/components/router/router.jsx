import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../app';

import ChoicesContainer from '../options/choices_container';

const AppRouter = ({ store }) => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={ChoicesContainer} />
      </Route>
    </Router>
  );
};

export default AppRouter;
