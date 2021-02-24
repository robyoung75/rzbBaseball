import React from "react";
import BatterStory from "../BatterStory/BatterStory";
import "./StoryReel.css";
import GameChanger from '../GameChanger/GameChanger'

function StoryReel({mobile}) {
  return (
    <div className="storyReel">
       {/* <GameChanger/> */}
      <h3>Players of the Week</h3>
      <div className="storyReel__story">     
      
        <BatterStory />
         <BatterStory />
        <BatterStory /> 
      </div>
      <GameChanger/>
    </div>
  );
}

export default StoryReel;
