import React, {
  useState,
  useReducer,
  useContext,
  useRef,
  forwardRef,
  useImperativeHandle
} from 'react';
// If you update a State Hook to the same value as the current state, React will bail out without rendering the children or firing effects. (React uses the Object.is comparison algorithm.)
function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  // Lazy initial state
  // If the initial state is the result of an expensive computation, you may provide a function instead, which will be executed only on the initial render
  const [obj, setState] = useState(() => {
    const initialObje = { [`key-${count}`]: count };
    return initialObje;
  });

  // Unlike the setState method found in class components, useState does not automatically merge update objects.
  // Another option is useReducer, which is more suited for managing state objects that contain multiple sub-values.
  function test(obj = {}) {
    setState(prevState => {
      return { ...prevState, ...obj };
    });
  }

  return (
    <>
      Count: {count + JSON.stringify(obj)}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => test({ [`key-${count}`]: count })}>test</button>
    </>
  );
}

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  const [theme, setTheme] = useState(themes.dark);
  setTimeout(() => {
    setTheme(themes.light);
  }, 1000);
  return (
    <ThemeContext.Provider value={theme}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
// useReducer is usually preferable to useState when you have complex state logic that
// involves multiple sub-values or when the next state depends on the previous one.
// useReducer also lets you optimize performance for components that trigger deep updates
// because you can pass dispatch down instead of callbacks.
function CounterWithUseReducer() {
  // React guarantees that dispatch function identity is stable and won’t change on re-renders. This is why it’s safe to omit from the useEffect or useCallback dependency list.
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}
// Lazy initialization

function init(initialCount) {
  return { count: initialCount };
}

function lazyReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

function LazyCounter({ initialCount }) {
  const [state, dispatch] = useReducer(lazyReducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({ type: 'reset', payload: initialCount })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
// useImperativeHandle TODO:
const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} />;
})

// TODO: useCallback
// TODO: useMemo

export function HooksAPI() {
  const inputRef = useRef();

  return (
    <div>
      <Counter initialCount={1} />
      <App />
      <CounterWithUseReducer />
      <LazyCounter initialCount={10} />
      <TextInputWithFocusButton />
      <FancyInput ref={inputRef} />
    </div>
  );
}
