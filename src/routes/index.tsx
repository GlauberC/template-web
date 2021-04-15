/* eslint-disable no-shadow */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Interface from '../pages/Interface';
import { routesList } from './routesList';

const Routes: React.FC = () => (
  <Router>
    {routesList.map((route) => (
      <Interface>
        {route.children ? (
          <>
            {route.children &&
              route.children.map((child) => (
                <Route
                  key={'route child' + route.path}
                  exact={child.exact}
                  path={child.path}
                  component={child.component}
                />
              ))}
          </>
        ) : (
          <Route
            key={'route ' + route.path}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        )}
      </Interface>
    ))}
  </Router>
);
export default Routes;
