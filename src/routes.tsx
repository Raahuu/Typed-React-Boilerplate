import React, { lazy } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={lazy(() => import('containers/App/App'))}
      />
      <Route component={lazy(() => import('containers/NotFound'))} />
    </Switch>
  );
};

export default withRouter(Routes);
