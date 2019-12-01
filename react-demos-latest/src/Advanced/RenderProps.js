import React from 'react';
// The term “render prop” refers to a technique for sharing code between React components using a prop whose value is a function.
// Libraries that use render props include React Router, Downshift and Formik.

// How can we reuse this behavior in another component?
class OldMouseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        <p>
          The current mouse position is ({this.state.x}, {this.state.y})
        </p>
      </div>
    );
  }
}

function Cat({ mouse }) {
  return (
    <mark style={{ position: 'absolute', left: mouse.x, top: mouse.y }}>
      cat
    </mark>
  );
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        {this.props.render
          ? this.props.render(this.state)
          : this.props.children(this.state)}
      </div>
    );
  }
}

class MouseFromPureComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        MouseFromPureComponent: {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTrackerWithGoodPerformance extends React.Component {
  // Defined as an instance method, `this.renderTheCat` always
  // refers to *same* function when we use it in render
  renderTheCat(mouse) {
    return <Cat mouse={mouse} />;
  }

  render() {
    return (
      <div>
        <h1>MouseTrackerWithGoodPerformance!</h1>
        <MouseFromPureComponent render={this.renderTheCat} />
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.desc || 'move your mouse'}</h1>
        {/* More concretely, a render prop is a function prop that a component uses to know what to render */}
        <Mouse render={mouse => <Cat mouse={mouse} />} />
        {/*
          This is bad! The value of the `render` prop will
          be different on each render.
        */}
        <MouseFromPureComponent render={mouse => <Cat mouse={mouse} />} />
        <MouseTrackerWithGoodPerformance
          render={mouse => <Cat mouse={mouse} />}
        />
        {/* Although the examples above use render, we could just as easily use the children prop! */}
        <Mouse
          children={mouse => (
            <p>
              with children props {mouse.x}, {mouse.y}
            </p>
          )}
        />
        {/* or */}

        <Mouse>
          {mouse => (
            <p>
              with children {mouse.x}, {mouse.y}
            </p>
          )}
        </Mouse>
      </div>
    );
  }
}
// One interesting thing to note about render props is that you can implement most higher-order components (HOC) using a regular component with a render prop.
// If you really want a HOC for some reason, you can easily
// create one using a regular component with a render prop!
function withMouse(Component) {
  return class extends React.Component {
    render() {
      return (
        <Mouse render={mouse => <Component {...this.props} mouse={mouse} />} />
      );
    }
  };
}

const MouseTrackerWithMouse = withMouse(MouseTracker);

export function RenderProps() {
  return (
    <>
      <OldMouseTracker />
      <MouseTracker />
      <MouseTrackerWithMouse desc="move again" />
    </>
  );
}
