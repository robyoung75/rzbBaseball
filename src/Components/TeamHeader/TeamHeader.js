import React, { useState } from "react";
import { useStateValue } from "../../assets/stateProvider";
import Team from "../TeamList/TeamList";
import "./TeamHeaderMobile.css";
function TeamHeader({
  handleBattingClick,
  handleCoachesClick,
  handleTeamClick,
  handlePitchingClick,
}) {
  return (
    <div className="teamHeader">
      <div className="teamHeader__top">
        <h3 onClick={handleTeamClick}>2020 Razorbacks</h3>
      </div>

      <div className="teamHeader__bottom">
        <button className="teamHeader__button" onClick={handleBattingClick}>
          BATTING
        </button>
        <button className="teamHeader__button" onClick={handlePitchingClick}>
          PITCHING
        </button>
        <button className="teamHeader__button" onClick={handleCoachesClick}>
          COACHES
        </button>
      </div>
    </div>
  );
}

export default TeamHeader;
