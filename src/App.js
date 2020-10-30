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

import { auth, db, updateDisplayName } from "../src/assets/firebase";
import { updateProfilePic } from '../src/assets/firebase';

import { useStateValue } from "./assets/stateProvider";
import LandingPage from "./Components/LandingPage/LandingPage";

function App() {
  // getting state
  const [{ userData }, dispatch] = useStateValue();

  const teamData = () => {
    let teamDataRef = db.collection("teamData");
    let allTeamData = teamDataRef.get().then((snapshot) => {
      dispatch({
        type: "TEAM_DATA",
        playerData: snapshot.docs.map((doc) => ({
          playerId: doc.id,
          playerData: doc.data(),
        })),
      });
    });
  };

  const coachesData = () => {
    let coachDataRef = db.collection("coachesData");
    let allCoachData = coachDataRef.get().then((snapshot) => {
      dispatch({
        type: "COACHES_DATA",
        coachData: snapshot.docs.map((doc) => ({
          coachId: doc.id,
          coachData: doc.data(),
        })),
      });
    });
  };

  const scheduleData = () => {
    let scheduleDataRef = db.collection("schedule");
    let allScheduleData = scheduleDataRef
      .orderBy("timestamp", "desc")
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
    let postDataRef = db.collection("posts")
    let allPostData = postDataRef.get().then((snapshot) => {
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

        // console.log(authUser);

        // updateProfilePic("https://firebasestorage.googleapis.com/v0/b/rzbbaseball-ddb27.appspot.com/o/players%2FbrightonWhite.jpg?alt=media")
        // updateDisplayName('CoachY');

        teamData();

        coachesData();

        scheduleData();


        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
          dispatch({
            type: "POST_DATA",
            post: snapshot.docs.map((doc) => ({
              postId: doc.id,              
              postData: doc.data(),
            })),

          })
        })

        // postData();
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
        teamData();

        coachesData();

        scheduleData();

        // postData();

       
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
