import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { Accessibility } from './Accessibility';
import { ErrorBoundary } from './ErrorBoundary';
import { Context } from './Context';
import { ForwardingRefs } from './ForwardingRefs';
import { HOC } from './HOC';

export function Advanced() {
  return (
    <div>
      <nav>
        <h3>ADVANCED GUIDES</h3>
        <ul>
          <li>
            <Link to="/HOC">HOC</Link>
          </li>
          <li>
            <Link to="/ForwardingRefs">ForwardingRefs</Link>
          </li>
          <li>
            <Link to="/Context">Context</Link>
          </li>
          <li>
            <Link to="/ErrorBoundary">ErrorBoundary</Link>
          </li>
          <li>
            <Link to="/Accessibility">Accessibility</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/HOC">
          <HOC />
        </Route>
        <Route path="/ForwardingRefs">
          <ForwardingRefs />
        </Route>
        <Route path="/Context">
          <Context />
        </Route>
        <Route path="/ErrorBoundary">
          <ErrorBoundary />
        </Route>
        <Route path="/Accessibility">
          <Accessibility />
        </Route>
      </Switch>
    </div>
  );
}
