import React, { Component } from 'react';
import ClickCounter from './ClickCounter';


class ControlPanel extends Component {
  constructor(props){
    super(props);
    this.onClickButton = this.onClickButton.bind(this);
    this.state = {count : 0}
  }

  onClickButton () {
    this.setState({count: this.state.count + 1})
  }


  render() {
    return (
      <div>
        <ClickCounter caption='First' initValue={23} />
        <ClickCounter caption='Second' initValue={10} />
        <ClickCounter caption='Third' initValue={20} />
        <button onClick={e=>this.forceUpdate()}>btn</button>
      </div>
    );
  }
}

export default ControlPanel;
