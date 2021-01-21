import React from "react";
import Story from "../Story/Story";
import "./StoryReel.css";

function StoryReel({mobile}) {
  return (
    <div className="storyReel">
        
      <h3>Players of the Week</h3>
      <div className="storyReel__story">      
        <Story />
        <Story />
        <Story />
      </div>
    </div>
  );
}

export default StoryReel;
