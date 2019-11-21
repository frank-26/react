import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ClickCounter extends Component {
  constructor(props){
    super(props);
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    this.state = {count : props.initValue || 0}
  }

  onClickDecrementButton () {
    this.setState({count: this.state.count - 1})
  }

  onClickIncrementButton () {
    this.setState({count: this.state.count + 1})
  }

  componentWillMount(){
    console.log('enter...',this.props.caption)
  }

  componentWillReceiveProps(nextProps){
    console.log('enter componentWillRecieveProps', this.props.caption)
  }

  render() {
    const {caption} = this.props;
    console.log('render', caption)
    return (
      <div>
        <button onClick = {this.onClickIncrementButton}>+</button>
        <button onClick = {this.onClickDecrementButton}>-</button>
        <p>{caption} {this.state.count}</p>
      </div>
    );
  }
}

ClickCounter.propTypes = {
  caption: PropTypes.string.isRequired,
  initValue: PropTypes.number
};

export default ClickCounter;
