import React, { Fragment } from 'react';
import { ThemeContext, themes } from './theme-context';

// Context provides a way to pass data through the component tree without having
// to pass props down manually at every level. Context is designed to share
// data that can be considered “global” for a tree of React components, such as
// the current authenticated user, theme, or preferred language.

// cannot use
function Button(value) {
  return (
    <div>
      <button>{value}</button>
    </div>
  );
}

/*
function Page(props) {
  const user = props.user;
  const userLink = (
    <Link href={user.permalink}>
      <Avatar user={user} size={props.avatarSize} />
    </Link>
  );
  return <PageLayout userLink={userLink} />;
}

// Now, we have:
<Page user={user} avatarSize={avatarSize} />
// ... which renders ...
<PageLayout userLink={...} />
// ... which renders ...
<NavigationBar userLink={...} />
// ... which renders ...
{props.userLink}
*/
// TAG: APIs

const MyContext = React.createContext('default-context');

class MyClass extends React.Component {
  // static contextType = MyContext; // or by this : experimental

  componentDidMount() {
    let value = this.context;
    console.log(value);
    /* perform a side-effect at mount using the value of MyContext */
  }

  render() {
    let value = this.context;
    /* render something based on the value of MyContext */
    return (
      <MyContext.Provider value="hello-my-context">
        {value}
        {/* This lets you subscribe to a context within a function component. */}
        <MyContext.Consumer>{Button}</MyContext.Consumer>
      </MyContext.Provider>
    );
  }
}
MyClass.contextType = MyContext;

// Example
class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return <button {...props} style={{ backgroundColor: theme.background }} />;
  }
}
ThemedButton.contextType = ThemeContext;

function Toolbar(props) {
  return <ThemedButton onClick={props.changeTheme}>Change Theme</ThemedButton>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }));
    };
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <section>
          <ThemedButton />
        </section>
      </div>
    );
  }
}

export function Context() {
  return (
    <Fragment>
      <App />
      <MyClass />
    </Fragment>
  );
}
