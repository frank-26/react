import React from 'react';

//  you have to ‘pull’ the value from the field when you need it.
class UncontrolledForm extends React.Component {
  handleSubmitClick = () => {
    const name = this._name.value;

    console.log('UncontrolledForm value:', name);
    // do something with `name`
  };

  render() {
    return (
      <div>
        <input type="text" ref={input => (this._name = input)} />
        <button onClick={this.handleSubmitClick}>Sign up</button>
      </div>
    );
  }
}
// This means your data (state) and UI (inputs) are always in sync.
// This also means that the form component can respond to input changes immediately; for example, by:

// - in-place feedback, like validations
// - disabling the button unless all fields have valid data
// - enforcing a specific input format, like credit card numbers
class ControlledForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
    console.log('ControlledForm value:', this.state.name);
  };
  // A form element becomes “controlled” if you set its value via a prop or state. That’s all.
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
      </div>
    );
  }
}
export function Uncontrolled() {
  return (
    <>
      <UncontrolledForm />
      <ControlledForm />
    </>
  );
}
