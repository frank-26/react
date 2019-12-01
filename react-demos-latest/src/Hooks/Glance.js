import React, { useState, useEffect } from 'react';
// However, unlike this.setState in a class, updating a state variable always replaces it instead of merging it.
function Example() {
  // State Hook
  // React assumes that if you call useState many times, you do it in the same order during every render.
  const [count, setCount] = useState(0);

  // Effects:data fetching, subscriptions, or manually changing the DOM
  // It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.
  // Effects are declared inside the component so they have access to its props and state.
  // React guarantees the DOM has been updated by the time it runs the effects.

  useEffect(() => {
    // By default, React runs the effects after every render — including the first render.
    console.log('called');
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  // }, [count]);
  // }, []);//the props and state inside the effect will always have their initial values.it never needs to re-run
  // While passing [] as the second argument is closer to the familiar componentDidMount and componentWillUnmount mental model,
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count < 5 ? count + 1 : 100)}>
        Click me
      </button>
    </div>
  );
}
// Tip

// Unlike componentDidMount or componentDidUpdate, effects scheduled with useEffect don’t block
// the browser from updating the screen. This makes your app feel more responsive.
function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  setTimeout(() => {
    setIsOnline(true);
  }, 1000);
  // Effects Run on Each Update
  useEffect(() => {
    //set sth
    console.log(isOnline);
    return () => {
      // React performs the cleanup when the component unmounts.
      console.log('reset sth');
      // reset sth
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}

export function Glance() {
  return (
    <div>
      <Example />
      <FriendStatus />
    </div>
  );
}
