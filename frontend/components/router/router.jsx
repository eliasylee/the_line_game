import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../app';
import ChoicesContainer from '../choices/choices_container';
import FlowContainer from '../flow/flow_container';

const AppRouter = ({ store }) => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={ChoicesContainer} />
        <Route path="/flow" component={FlowContainer}/>
      </Route>
    </Router>
  );
};

export default AppRouter;
