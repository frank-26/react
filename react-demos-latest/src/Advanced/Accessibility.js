import React, { Fragment } from 'react';

function ListItem({ item }) {
  return (
    <Fragment>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </Fragment>
  );
}

function Glossary(props) {
  return (
    <>
      <dl>
        {props.items.map(item => (
          <ListItem item={item} key={item.id} />
        ))}
      </dl>
      <dl>
        {props.items.map(item => (
          // Fragments should also have a `key` prop when mapping collections
          <Fragment key={item.id}>
            <dt>{item.term}</dt>
            <dd>{item.description}</dd>
          </Fragment>
        ))}
      </dl>
    </>
  );
}

class OuterClickExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.toggleContainer = React.createRef();

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.onClickOutsideHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onClickOutsideHandler);
  }

  onClickHandler() {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen
    }));
  }

  onClickOutsideHandler(event) {
    if (
      this.state.isOpen &&
      !this.toggleContainer.current.contains(event.target)
    ) {
      this.setState({ isOpen: false });
    }
  }

  render() {
    return (
      <div ref={this.toggleContainer}>
        <button onClick={this.onClickHandler}>Select an option</button>
        {this.state.isOpen && (
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        )}
      </div>
    );
  }
}

const items = [{ id: 1, term: 'term', description: 'desc' }];
export function Accessibility() {
  return (
    <>
      <Glossary items={items} />
      <label htmlFor="namedInput">Name:</label>
      <OuterClickExample />
    </>
  );
}
