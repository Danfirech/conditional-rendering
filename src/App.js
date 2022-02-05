import React, { Component } from "react";
import "./App.css";
import AuthButton from "./AuthButton";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    let { isLoggedIn } = this.state;
    let AuthButton;

    if (isLoggedIn) {
      AuthButton = <button>Logout</button>;
    } else {
      AuthButton = <button>Login</button>;
    }

    return (
      <div className="App">
        <h1>
          This is a Demo showing several ways to implement Conditional Rendering
          in React.
        </h1>
        {AuthButton}
      </div>
    );
  }
}

export default App;
