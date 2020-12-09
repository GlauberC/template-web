/* eslint-disable no-shadow */
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

export enum AuthRoutesNames {
  dashboard = '/dashboard',
}

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path={AuthRoutesNames.dashboard} component={Dashboard} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
