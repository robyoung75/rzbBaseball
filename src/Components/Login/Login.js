import { auth } from "../../assets/firebase";
import React, { useState } from "react";

import "./LoginMobile.css";
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

  return (
    <div className="login">
      <h2>Razorback Sign in</h2>
      <form id="login">
        <div className="login__input">
          <label id="login__label" htmlFor="email">
            <span role="img" aria-label="baseball">
              ⚾
            </span>{" "}
            <p>Email</p>
          </label>
          <input
            type="text"
            id="login"
            name="email"
            value={email}
            placeholder="Your email.."
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="login__input">
          <label id="login__label" htmlFor="submit">
            <span role="img" aria-label="baseball">
              ⚾
            </span>{" "}
            <p>Password</p>
          </label>
          <input
            type="password"
            value={password}
            id="login"
            name="lastname"
            placeholder="Your password.."
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <input
          id="contact_submit"
          type="submit"
          value="Submit"
          className="login__submit"
          onClick={signIn}
        ></input>
      </form>

      <p className="login__terms">By signing-in you agree to RZBB Conditions of Use & Sale.</p>
    </div>
  );
}

export default Login;
