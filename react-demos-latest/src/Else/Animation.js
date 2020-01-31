import React ,{useState} from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

export function Animation() {
 const [visible, setVisible] = useState(false)
 return  <div>
          <button onClick={()=>setVisible(true)}>show</button>

          <Rodal visible={visible} onClose={()=>setVisible(false)}>
              <div>Content</div>
          </Rodal>
        </div>
    
}