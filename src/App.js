import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Dropdown from "./Components/Dropdown/Dropdown";
import { auth } from "../src/assets/firebase";
import { useStateValue } from "./assets/stateProvider";

function App() {
  // getting state
  const [{ posts, user }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    // a listener for auth change

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser.providerData,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/About">
            <Header />
            <About />
            <Footer />
          </Route>

          <Route path="/Contact">
            <Header />
            <Contact />
            <Footer />
          </Route>

          <Route path="/Login">
            <Header />
            <Login />
            <Footer />
          </Route>

          {/* Note: default root always located at the bottom */}
          <Route path="/">
            {/* <Dropdown /> */}
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
