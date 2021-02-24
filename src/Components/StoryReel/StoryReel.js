import React from "react";
import BatterStory from "../BatterStory/BatterStory";
import PitcherStory from "../PitcherStory/PitcherStory";
import "./StoryReel.css";
import GameChanger from "../GameChanger/GameChanger";
import OverAllPlayerStory from "../OverAllPlayerStory/OverAllPlayerStory";

function StoryReel({ mobile }) {
  return (
    <div className="storyReel">
      {/* <GameChanger/> */}
      <h3>Players of the Week</h3>
      <div className="storyReel__story">
        <PitcherStory />
        <OverAllPlayerStory />
        <BatterStory />
      </div>
      <GameChanger />
    </div>
  );
}

export default StoryReel;
