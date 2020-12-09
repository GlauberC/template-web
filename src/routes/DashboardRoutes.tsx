/* eslint-disable no-shadow */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoutesNames } from '.';
import Home from '../pages/Dashboard/Home';
import Pessoas from '../pages/Dashboard/Pessoas';
import Trabalho from '../pages/Dashboard/Trabalho';

export enum DashboardRoutesNames {
  home = '/',
  pessoas = '/pessoas',
  trabalho = '/trabalho',
}

const DashboardRoutes: React.FC = () => (
  <Switch>
    <Route
      path={AuthRoutesNames.dashboard + DashboardRoutesNames.home}
      exact
      component={Home}
    />
    <Route
      path={AuthRoutesNames.dashboard + DashboardRoutesNames.pessoas}
      component={Pessoas}
    />
    <Route
      path={AuthRoutesNames.dashboard + DashboardRoutesNames.trabalho}
      component={Trabalho}
    />
  </Switch>
);
export default DashboardRoutes;
