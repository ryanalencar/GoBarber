import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/repository" component={Repository} />
      </Switch>
    </Router>
  );
}
