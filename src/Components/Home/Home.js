import React, { useEffect, useState } from "react";
import Team from "../Team/Team";

import Post from "../Post/Post";
import PostInput from "../PostInput/PostInput";
import Schedule from "../Schedule/Schedule";
import "./Home.css";
import GameChanger from "../GameChanger/GameChanger";
import { useStateValue } from "../../assets/stateProvider";


function Home() {
  const [{ user }, dispatch] = useStateValue();

 

  return (
    <div className="home">
      <div className="home__content">
        <div className="home__left">
          <Team />
        </div>
        <div className="home__center">
          {!user ? (
            <>
              <Post />
             
            </>
          ) : (
            <div>
              <PostInput />
              <Post />
              
            </div>
          )}
        </div>
        <div className="home__right">
          <Schedule />
          <GameChanger />
        </div>
      </div>
    </div>
  );
}

export default Home;
