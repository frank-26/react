import React ,{useState} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Rodal from 'rodal';

import 'rodal/lib/rodal.css';

function Demo() {
 const [visible, setVisible] = useState(false)
 return  <div>
          <button onClick={()=>setVisible(true)}>show</button>

          <Rodal visible={visible} onClose={()=>setVisible(false)}>
              <div>Content</div>
          </Rodal>
        </div>
    
}

export function Else() {
  return (
    <div>
      <nav>
        <h3>Else</h3>
        <ul>
          <li>
            <Link to="/Rodal">Rodal-animation</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/Rodal">
          <Demo />
        </Route>
      </Switch>
    </div>
  );
}
