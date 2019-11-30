import React, { forwardRef } from 'react';

//  If you add a ref to a HOC, the ref will refer to the outermost container component, not the wrapped component.
function logProps(WrappedComponent) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return LogProps;
}
// we can explicitly forward refs to the inner FancyButton component using the React.forwardRef API.
function logPropsWithForwardRef(Component) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      const { forwardedRef, ...rest } = this.props;

      // Assign the custom prop "forwardedRef" as a ref
      return <Component ref={forwardedRef} {...rest} />;
    }
  }

  // Give this component a more helpful display name in DevTools.
  // e.g. "ForwardRef(logProps(MyComponent))"
  const name = Component.displayName || Component.name;
  forwardRef.displayName = `logProps(${name})`;
  // Note the second param "ref" provided by React.forwardRef.
  // We can pass it along to LogProps as a regular prop, e.g. "forwardedRef"
  // And it can then be attached to the Component.
  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />;
  });
}

const FancyButton = React.forwardRef((props, ref) => (
  // The second ref argument only exists when you define a component with React.forwardRef call.
  // Regular function or class components don’t receive the ref argument, and ref is not available in props either.
  <button ref={ref} className="FancyButton">
    {/* {ref.current} */}
    {props.children}
  </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();

// 1. We create a React ref by calling React.createRef and assign it to a ref variable.
// 2. We pass our ref down to <FancyButton ref={ref}> by specifying it as a JSX attribute.
// 3. React passes the ref to the (props, ref) => ... function inside forwardRef as a second argument.
// 4. We forward this ref argument down to <button ref={ref}> by specifying it as a JSX attribute.
// 5.When the ref is attached, ref.current will point to the <button> DOM node.

const LogPropsFancyButton = logProps(FancyButton); // FancyButton component will actually be attached to the LogProps component

const LogPropsWithForwardRefFancyButton = logPropsWithForwardRef(FancyButton);

export function ForwardingRefs() {
  return (
    <>
      <FancyButton ref={ref}>Click me!</FancyButton>
      <LogPropsFancyButton ref={ref}> Hello </LogPropsFancyButton>
      {/* There is one caveat to the above example: refs will not get passed through. */}
      <LogPropsWithForwardRefFancyButton ref={ref}>
        Hello LogPropsWithForwardRefFancyButton
      </LogPropsWithForwardRefFancyButton>
    </>
  );
}
