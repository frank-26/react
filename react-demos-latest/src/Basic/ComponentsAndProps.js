import React from 'react';

function WelcomeByFunc(props) {
  return <mark>Hello, {props.name}</mark>;
}

class WelcomeByClass extends React.Component {
  render() {
    return <div>Hello, {this.props.name}</div>;
  }
}

export function ComponentsAndProps() {
  return (
    <div>
      <WelcomeByFunc name="FC" />
      <WelcomeByClass name="Class" />
    </div>
  );
}
