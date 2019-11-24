import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { Accessibility } from './Accessibility';
import { Context } from './Context';

export function Advanced() {
  return (
    <div>
      <nav>
        <h3>ADVANCED GUIDES</h3>
        <ul>
          <li>
            <Link to="/Context">Context</Link>
          </li>
          <li>
            <Link to="/Accessibility">Accessibility</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/Context">
          <Context />
        </Route>
        <Route path="/Accessibility">
          <Accessibility />
        </Route>
      </Switch>
    </div>
  );
}
