import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    let { isLoggedIn } = this.state;

    const renderAuthButton = () => {
      if (isLoggedIn) {
        return <button>Logout</button>;
      } else return <button>login</button>;
    };

    return (
      <div className="App">
        <h1>
          This is a Demo showing several ways to implement Conditional Rendering
          in React.
        </h1>
        {renderAuthButton()}
      </div>
    );
  }
}

export default App;
