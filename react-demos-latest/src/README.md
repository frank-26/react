## Basic: Thinking in React

1. Step 1: Break The UI Into A Component Hierarchy
2. Step 2: Build A Static Version in React
3. Step 3: Identify The Minimal (but complete) Representation Of UI State

   - Is it passed in from a parent via props? If so, it probably isn’t state.
   - Does it remain unchanged over time? If so, it probably isn’t state.
   - Can you compute it based on any other state or props in your component? If so, it isn’t state.

4. Step 4: Identify Where Your State Should Live
5. Step 5: Add Inverse Data Flow

## Advanced

#### Reconciliation

    React implements a heuristic O(n) algorithm based on two assumptions:

        - Two elements of different types will produce different trees.
        - The developer can hint at which child elements may be stable across different renders with a key prop.

2.  Elements Of Different Types

> When tearing down a tree, old DOM nodes are destroyed. Component instances receive componentWillUnmount(). When building up a new tree, new DOM nodes are inserted into the DOM. Component instances receive componentWillMount() and then componentDidMount(). Any state associated with the old tree is lost.

3. DOM Elements Of The Same Type

   > keeps the same underlying DOM node, and only updates the changed attributes.

4. Component Elements Of The Same Type

   > When a component updates, the instance stays the same, so that state is maintained across renders. React updates the props of the underlying component instance to match the new element, and calls componentWillReceiveProps() and componentWillUpdate() on the underlying instance.

5. Recursing On Children

   > By default, when recursing on the children of a DOM node, React just iterates over both lists of children at the same time and generates a mutation whenever there’s a difference.

6. Keys
   > In order to solve this issue, React supports a key attribute. When children have keys, React uses the key to match children in the original tree with children in the subsequent tree. (As a last resort, you can pass an item’s index in the array as a key. This can work well if the items are never reordered, but reorders will be slow.)

The algorithm will not try to match subtrees of different component types. If you see yourself alternating between two component types with very similar output, you may want to make it the same type. In practice, we haven’t found this to be an issue.

Keys should be stable, predictable, and unique. Unstable keys (like those produced by Math.random()) will cause many component instances and DOM nodes to be unnecessarily recreated, which can cause performance degradation and lost state in child components.

#### Refs and the DOM

1. When to Use Refs？（Avoid using refs for anything that can be done declaratively.）

- Managing focus, text selection, or media playback.
- Triggering imperative animations.
- Integrating with third-party DOM libraries.

2. Refs and Function Components

You may not use the ref attribute on function components because they don’t have instances. You should convert the component to a class if you need a ref to it, just like you do when you need lifecycle methods or state.

You can, however, use the ref attribute inside a function component as long as you refer to a DOM element or a class component.

> If the ref callback is defined as an inline function, it will get called twice during updates, first with null and then again with the DOM element. This is because a new instance of the function is created with each render, so React needs to clear the old ref and set up the new one. You can avoid this by defining the ref callback as a bound method on the class, but note that it shouldn’t matter in most cases.

#### Strict Mode

> StrictMode is a tool for highlighting potential problems in an application. Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.

StrictMode currently helps with:

- Identifying components with unsafe lifecycles
- Warning about legacy string ref API usage
- Warning about deprecated findDOMNode usage
- Detecting unexpected side effects
- Detecting legacy context API

## Hooks

> Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

#### Rules of Hooks

- TOP LEVEL: Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.
- FC: Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions. (There is just one other valid place to call Hooks — your own custom Hooks. We’ll learn about them in a moment.)

> So how does React know which state corresponds to which useState call? The answer is that React relies on the order in which Hooks are called.

## ConcurrentMode
