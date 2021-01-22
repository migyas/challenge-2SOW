import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import Listing from '../pages/Listing';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Listing} isPrivate />
    <Route path="/login" exact component={Login} />
  </Switch>
);

export default Routes;
