import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Dashboard/Home';

const DashboardRoutes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
  </Switch>
);
export default DashboardRoutes;
