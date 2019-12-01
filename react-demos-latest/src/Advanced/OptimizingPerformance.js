import React, { useState } from 'react';

class CounterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // if (this.props.color !== nextProps.color) {
  //   //   return true;
  //   // }
  //   // if (this.state.count !== nextState.count) {
  //   //   return true;
  //   // }
  //   return false;
  // }

  render() {
    return (
      <button
        style={{ color: this.props.color }}
        onClick={() => this.setState(state => ({ count: state.count + 1 }))}
      >
        Count: {this.state.count}
      </button>
    );
  }
}

// React provides a helper to use this logic - just inherit from React.PureComponent.
// So this code is a simpler way to achieve the same thing:
class CounterButtonSimple extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  render() {
    return (
      <button
        style={{ color: this.props.color }}
        onClick={() => this.setState(state => ({ count: state.count + 1 }))}
      >
        Count: {this.state.count}
      </button>
    );
  }
}

class ListOfWords extends React.PureComponent {
  render() {
    return <div>{this.props.words.join(',')}</div>;
  }
}
// This code does not work correctly:
class WordAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar']
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickMakeEffect = this.handleClickMakeEffect.bind(this);
  }

  handleClick() {
    // This section is bad style and causes a bug (not updated)
    // The problem is that PureComponent will do a simple comparison between the old and new values of this.props.words.
    const words = this.state.words;
    words.push('marklar');
    this.setState({ words });
  }
  // FIx:  avoid mutating values that you are using as props or state.
  handleClickMakeEffect() {
    this.setState(state => ({
      words: [...state.words, 'marklar']
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>handleClick</button>
        <button onClick={this.handleClickMakeEffect}>
          handleClickMakeEffect
        </button>
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}

export function OptimizingPerformance() {
  const [color, setColor] = useState('red');
  function setRandomColor() {
    const color =
      '#' +
      Math.random()
        .toString(16)
        .slice(-6);

    setColor(color);
  }
  return (
    <>
      <button onClick={setRandomColor}>setRandomColor</button>
      <CounterButton color={color} />
      <CounterButtonSimple color={color} />
      <hr />
      <WordAdder />
    </>
  );
}
