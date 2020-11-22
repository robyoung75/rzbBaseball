import React from "react";


import Schedule from "../Schedule/Schedule";
import "./Home.css";
import GameChanger from "../GameChanger/GameChanger";
import PostsFeed from "../PostsFeed/PostsFeed";
import PostInput from "../PostInput/PostInput";
import TeamHeader from "../TeamHeader/TeamHeader";
import TeamList from "../TeamList/TeamList";


function Home() {
  return (
    <div className="home">
      <div className="home__left">
        <TeamHeader />
        <TeamList />
      </div>
      <div className="home__center">
        <PostInput />

        <div className="home__centerBottom">
          {/* <PostsFeed /> */}
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
