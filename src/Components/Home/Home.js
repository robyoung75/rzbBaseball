import React from "react";
import Team from "../Team/Team";

import Schedule from "../Schedule/Schedule";
import "./Home.css";
import GameChanger from "../GameChanger/GameChanger";
import PostsFeed from "../PostsFeed/PostsFeed";
import PostInput from "../PostInput/PostInput";

function Home() {
  return (
    <div className="home">
      <div className="home__left">
        <Team />
      </div>
      <div className="home__center">
        <PostInput />

        <div className="home__centerBottom">
          <PostsFeed />
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
