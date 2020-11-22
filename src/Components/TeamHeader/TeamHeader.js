import React, { useState } from "react";
import { useStateValue } from "../../assets/stateProvider";
import Team from "../TeamList/TeamList";
import "./TeamHeader.css";
function TeamHeader() {
      // Global State
  const [{ playerData, coachesData }, dispatch] = useStateValue();

  // state that holds the value of the clicked buttons.
  const [battingBtnClick, setBattingBtnClick] = useState(false);
  const [coachesBtnClick, setCoachesBtnClick] = useState(false);
  const [pitcherBtnClick, setPitcherBtnClick] = useState(false);
  const [teamComponent, setTeamComponent] = useState(true);

  const handleBattingClick = () => {
    dispatch({ type: "BATTING_AVE", playerData });
    setCoachesBtnClick(false);
    setPitcherBtnClick(false);
    setTeamComponent(false);
    setBattingBtnClick(true);
  };

  const handleCoachesClick = () => {
    console.log('coaches click')
    dispatch({ type: "COACHES_DATA", coachesData });
    setBattingBtnClick(false);
    setPitcherBtnClick(false);
    setTeamComponent(false);
    setCoachesBtnClick(true);
  };

  const handlePitchingClick = () => {
    dispatch({ type: "PITCHING_ERA", playerData });
    setBattingBtnClick(false);
    setCoachesBtnClick(false);
    setTeamComponent(false);
    setPitcherBtnClick(true);
  };

  const handleTeamClick = () => {
    setBattingBtnClick(false);
    setCoachesBtnClick(false);
    setTeamComponent(true);
    setPitcherBtnClick(false);
  };

    
  return (
    <div className="teamHeader">
      <h3 onClick={handleTeamClick}>2020 Razorbacks</h3>

      <div className="teamHeader__buttons">
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
