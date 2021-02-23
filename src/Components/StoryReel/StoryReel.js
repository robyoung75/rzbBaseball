import React from "react";
import Story from "../Story/Story";
import "./StoryReel.css";
import GameChanger from '../GameChanger/GameChanger'

function StoryReel({mobile}) {
  return (
    <div className="storyReel">
       {/* <GameChanger/> */}
      <h3>Players of the Week</h3>
      <div className="storyReel__story">     
      
        <Story />
        {/* <Story />
        <Story /> */}
      </div>
      <GameChanger/>
    </div>
  );
}

export default StoryReel;
