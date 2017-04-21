import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from 'ui/pages/Home';
import About from 'ui/pages/About';
import Shows from 'ui/pages/Shows';
import Show from 'ui/pages/Show';
import Watch from 'ui/pages/Watch';
import NotFound from 'ui/pages/NotFound';

function Routes(props) {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/shows" component={Shows} />
      <Route path="/watch/:id/:uid" component={Watch} />
      <Route path="/show/:id/:uid" component={Show} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Routes;
