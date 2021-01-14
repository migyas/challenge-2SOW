import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../pages/Login';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Login} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
