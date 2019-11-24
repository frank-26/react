import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), counter: 0 };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    // State Updates May Be Asynchronous
    // Because this.props and this.state may be updated asynchronously,
    //  you should not rely on their values for calculating the next state.
    this.setState({
      date: new Date()
    });

    // Wrong
    // this.setState({
    //   counter: this.state.counter + this.props.increment
    // });
    // Correct

    this.setState((state, props) => ({
      counter: state.counter + props.increment
    }));
  }

  render() {
    return (
      <div>
        <h1>Hello, state!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <div>{this.state.counter}</div>
      </div>
    );
  }
}

export function StateLifeCycle() {
  return (
    <div>
      <Clock increment={1} />
      <Clock increment={10} />
      <Clock increment={100} />
    </div>
  );
}
