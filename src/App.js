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

import { auth, db } from "../src/assets/firebase";

import { useStateValue } from "./assets/stateProvider";

function App() {
  // getting state
  const [{ posts }, dispatch] = useStateValue();

  // const teamData = () => {
  //   let teamDataRef = db.collection("teamData");
  //   teamDataRef.get().then((snapshot) => {
  //     dispatch({
  //       type: "TEAM_DATA",
  //       playerData: snapshot.docs.map((doc) => ({
  //         playerId: doc.id,
  //         playerData: doc.data(),
  //       })),
  //     });
  //   });
  // };

  // const coachesData = () => {
  // let coachDataRef = db.collection("coachesData");
  //   coachDataRef.get().then((snapshot) => {
  //     dispatch({
  //       type: "COACHES_DATA",
  //       coachData: snapshot.docs.map((doc) => ({
  //         coachId: doc.id,
  //         coachData: doc.data(),
  //       })),
  //     });
  //   });
  // };

  const scheduleData = () => {
    let scheduleDataRef = db.collection("schedule");
    scheduleDataRef
      .orderBy("timestamp", "asc")
      .get()
      .then((snapshot) => {
        dispatch({
          type: "SCHEDULE_DATA",
          schedule: snapshot.docs.map((doc) => ({
            scheduleId: doc.id,
            scheduleData: doc.data(),
          })),
        });
      });
  };

  const postData = () => {
    let postDataRef = db.collection("posts");
    postDataRef
      .orderBy("timestamp", "desc")
      .get()
      .then((snapshot) => {
        dispatch({
          type: "POST_DATA",
          post: snapshot.docs.map((doc) => ({
            postId: doc.id,
            postData: doc.data(),
          })),
        });
      });
  };

  useEffect(() => {
    // will only run once when the app component loads...
    // a listener for auth change
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser.providerData,
          userData: authUser.email,
        });

        // updateProfilePic("https://firebasestorage.googleapis.com/v0/b/rzbbaseball-ddb27.appspot.com/o/players%2FtysonWhite.jpg?alt=media")
        // updateDisplayName('CoachY');

        // teamData();

        // coachesData();

        // scheduleData();

        postData();
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
        // teamData();

        // coachesData();

        // scheduleData();

        postData();
      }
    });
  }, [posts]);

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
