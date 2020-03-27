import React from "react";
import { Route, Switch } from "react-router-dom";

import WelcomePage from './container/WelcomePage';

export default function MainRoutes() {
  return (
    
        <Switch>
          <Route exact path="/" component={WelcomePage} />
        </Switch>
      
  );
}