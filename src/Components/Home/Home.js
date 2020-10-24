import React from "react";
import Team from "../Team/Team";

import Post from "../Post/Post";
import PostInput from "../PostInput/PostInput";
import Schedule from "../Schedule/Schedule";
import "./Home.css";
import GameChanger from "../GameChanger/GameChanger";
import { useStateValue } from "../../assets/stateProvider";

function Home() {
  return (
    <div className="home">
      <div className="home__left">
        <Team />
      </div>
      <div className="home__center">
        <div className="home__centerUser">
          <div className="home__centerUserTop">
            <PostInput />
          </div>
          <div className="home__centerUserBottom">
            <Post />
          </div>
        </div>
      </div>
      <div className="home__right">
        <Schedule />
        <GameChanger />
      </div>
    </div>
  );
}

export default Home;
