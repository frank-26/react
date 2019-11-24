import React from 'react';
// - React events are named using camelCase, rather than lowercase.
// - With JSX you pass a function as the event handler, rather than a string.
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // In JavaScript, class methods are not bound by default.https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick2 = () => {
    console.log('this is:', this);
  };

  deleteRow(id) {}

  render() {
    return (
      <>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        {/* 1. not recommended. In most cases, this is fine. However, if this callback is passed as a prop to lower components, 
        those components might do an extra re-rendering */}
        <button onClick={e => this.handleClick(e)}>Click me</button>
        {/* 2. */}
        <button onClick={this.handleClick2}>Click me</button>

        {/* Passing Arguments to Event Handlers */}
        <button onClick={e => this.deleteRow('id', e)}>Delete Row</button>
        <button onClick={this.deleteRow.bind(this, 'id')}>Delete Row</button>
      </>
    );
  }
}

export function Events() {
  // function activateLasers() {
  //   console.log('activateLasers');
  // }
  function activateLasersJSX() {
    console.log('activateLasersJSX');
  }
  function handleClick(e) {
    // Here, e is a synthetic event.https://reactjs.org/docs/events.html
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <div>
      {/* NOTE: Warning: Invalid event handler property `onclick`. Did you mean `onClick`? */}
      {/* <button onclick="activateLasers()">Activate Lasers</button> */}
      <button onClick={activateLasersJSX}>JSX Activate Lasers</button>

      {/* NOTE: you cannot return false to prevent default behavior in React. You must call preventDefault explicitly.  */}
      {/* <a href="/" onclick="console.log('The link was clicked.'); return false">
        Click me
      </a> */}

      <a href="/" onClick={handleClick}>
        Click me
      </a>
      <br />
      <Toggle />
    </div>
  );
}
