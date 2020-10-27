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
import LandingPage from "./Components/LandingPage/LandingPage";

function App() {
  // getting state
  const [{ userData }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    // a listener for auth change
    auth.onAuthStateChanged((authUser) => {
      // console.log('THE USER IS >>>', authUser.providerData);

      if (authUser) {
        let displayName = authUser.displayName;
        let email = authUser.email;
        let emailVerified = authUser.emailVerified;
        let photoURL = authUser.photoURL;
        let isAnonymous = authUser.isAnonymous;
        let uid = authUser.uid;
        let providerData = authUser.providerData;
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser.providerData,
          userData: authUser.email,
        });

        console.log(authUser);

        db.collection("teamData").onSnapshot((snapshot) => {
          dispatch({
            type: "TEAM_DATA",
            playerData: snapshot.docs.map((doc) => ({
              playerId: doc.id,
              playerData: doc.data(),
            })),
          });
        });

        db.collection("coachesData").onSnapshot((snapshot) => {
          dispatch({
            type: "COACHES_DATA",
            coachData: snapshot.docs.map((doc) => ({
              coachId: doc.id,
              coachData: doc.data(),
            })),
          });
        });

        db.collection("schedule")
          .orderBy("timestamp", "desc")
          .onSnapshot((snapshot) => {
            dispatch({
              type: "SCHEDULE_DATA",
              schedule: snapshot.docs.map((doc) => ({
                scheduleId: doc.id,
                scheduleData: doc.data(),
              })),
            });
          });

        db.collection("posts").onSnapshot((snapshot) => {
          dispatch({
            type: "POST_DATA",
            post: snapshot.docs.map((doc) => ({
              postId: doc.id,
              postData: doc.data(),
            })),
          });
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });

        db.collection("teamData").onSnapshot((snapshot) => {
          dispatch({
            type: "TEAM_DATA",
            playerData: snapshot.docs.map((doc) => ({
              playerId: doc.id,
              playerData: doc.data(),
            })),
          });
        });

        db.collection("coachesData").onSnapshot((snapshot) => {
          dispatch({
            type: "COACHES_DATA",
            coachData: snapshot.docs.map((doc) => ({
              coachId: doc.id,
              coachData: doc.data(),
            })),
          });
        });

        db.collection("schedule")
          .orderBy("timestamp", "desc")
          .onSnapshot((snapshot) => {
            dispatch({
              type: "SCHEDULE_DATA",
              schedule: snapshot.docs.map((doc) => ({
                scheduleId: doc.id,
                scheduleData: doc.data(),
              })),
            });
          });

        db.collection("posts").onSnapshot((snapshot) => {
          dispatch({
            type: "POST_DATA",
            post: snapshot.docs.map((doc) => ({
              postId: doc.id,
              postData: doc.data(),
            })),
          });
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

// db.collection("teamData").onSnapshot((snapshot) => {
//   dispatch({
//     type: "TEAM_DATA",
//     playerData: snapshot.docs.map((doc) => ({
//       playerId: doc.id,
//       playerData: doc.data(),
//     })),
//   });
// });

// db.collection("coachesData").onSnapshot((snapshot) => {
//   dispatch({
//     type: "COACHES_DATA",
//     coachData: snapshot.docs.map((doc) => ({
//       coachId: doc.id,
//       coachData: doc.data(),
//     })),
//   });
// });

// db.collection("schedule")
//   .orderBy("timestamp", "desc")
//   .onSnapshot((snapshot) => {
//     dispatch({
//       type: "SCHEDULE_DATA",
//       schedule: snapshot.docs.map((doc) => ({
//         scheduleId: doc.id,
//         scheduleData: doc.data(),
//       })),
//     });
//   });

// db.collection("posts").onSnapshot((snapshot) => {
//   dispatch({
//     type: "POST_DATA",
//     post: snapshot.docs.map((doc) => ({
//       postId: doc.id,
//       postData: doc.data(),
//     })),
//   });
// });
