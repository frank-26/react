import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {Animation} from './Animation';
import {LifeCycle} from './LifeCycle';

export function Else() {
  return (
    <div>
      <nav>
        <h3>Else</h3>
        <ul>
          <li>
            <Link to="/Animation">Animation-animation</Link>
          </li>
          <li>
            <Link to="/LifeCycle">LifeCycle</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/Animation">
          <Animation/>
        </Route>
        <Route path="/LifeCycle">
          <LifeCycle/>
        </Route>
      </Switch>
    </div>
  );
}
