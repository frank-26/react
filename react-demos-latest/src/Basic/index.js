import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { Calculator } from './Calculator';
import { Forms } from './Forms';
import { ListRender } from './ListRender';
import { ConditionRender } from './ConditionRender';
import { ComponentsAndProps } from './ComponentsAndProps';
import { Events } from './Events';
import { StateLifeCycle } from './StateLifeCycle';

export function Basic() {
  return (
    <div>
      <nav>
        <h3>Main concepts</h3>
        <ul>
          <li>
            <Link to="/">Rendering Elements</Link>
          </li>
          <li>
            <Link to="/lifecycle">StateLifeCycle</Link>
          </li>
          <li>
            <Link to="/evnets">Events</Link>
          </li>
          <li>
            <Link to="/condition-render">condition-render</Link>
          </li>
          <li>
            <Link to="/list">list</Link>
          </li>
          <li>
            <Link to="/forms">forms</Link>
          </li>
          <li>
            <Link to="/calculator">calculator</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/calculator">
          <Calculator />
        </Route>
        <Route path="/forms">
          <Forms />
        </Route>
        <Route path="/list">
          <ListRender />
        </Route>
        <Route path="/condition-render">
          <ConditionRender />
        </Route>
        <Route path="/lifecycle">
          <StateLifeCycle />
        </Route>
        <Route path="/evnets">
          <Events />
        </Route>
        <Route path="/">
          <ComponentsAndProps />
        </Route>
      </Switch>
    </div>
  );
}
