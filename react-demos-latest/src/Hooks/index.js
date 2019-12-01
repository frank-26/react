import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { Glance } from './Glance';
import { HooksAPI } from './HooksAPI';

export function Hooks() {
  return (
    <div>
      <nav>
        <h3>Hooks</h3>
        <ul>
          <li>
            <Link to="/HooksAPI">HooksAPI</Link>
          </li>
          <li>
            <Link to="/Glance">Glance</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/HooksAPI">
          <HooksAPI />
        </Route>
        <Route path="/Glance">
          <Glance />
        </Route>
      </Switch>
    </div>
  );
}
