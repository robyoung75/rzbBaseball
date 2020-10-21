import { auth } from "../../assets/firebase";
import React, { useState } from "react";

import "./Login.css";
import { useHistory } from "react-router-dom";


function Login() {
  const history = useHistory();

  // getting state think of these as react variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // e.preventDefault keeps the page from refreshing we don't want refresh in react design.
  const signIn = (e) => {
    e.preventDefault();
    // some fancy firebase login stuff.
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    // do some fance firebase register stuff.

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password.
        // console.log(auth); // logs authorization object
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login">
        <div className="login__container">
          <h1>Sign-in</h1>

          <form>
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="login__signInButton"
              type="submit"
              onClick={signIn}
            >
              Sign in
            </button>
          </form>

          <p>By signing-in you agree to RZBB Conditions of Use & Sale.</p>

          {/* <button
            className="login__registerButton"
            type="submit"
            onClick={register}
          >
            Create RazorBack Account
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
