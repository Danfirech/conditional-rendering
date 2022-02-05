import React from "react";

const AuthButton = (props) => {
  let { isLoggedIn } = props;

  // if (isLoggedIn) {
  //   return <button>Logout</button>;
  // } else {
  //   return <button>Login</button>;
  // }

  switch (isLoggedIn) {
    case true:
      return <button>Logout</button>;
      break;
    case false:
      return <button>Login</button>;
      break;
    default:
      return null;
  }
};

export default AuthButton;
