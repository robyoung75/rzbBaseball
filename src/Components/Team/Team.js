import React, { useState } from "react";

import "./Team.css";
import Batter from "../Batter/Batter";
import Coaches from "../Coaches/Coaches";
import Pitcher from "../Pitcher/Pitcher";
import { useStateValue } from "../../assets/stateProvider";

import { Avatar, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function Team() {
  const classes = useStyles();

  
  // Global State
  const [{playerData }, dispatch] = useStateValue()

// state that holds the value of the clicked buttons.
  const [battingBtnClick, setBattingBtnClick] = useState(false);
  const [coachesBtnClick, setCoachesBtnClick] = useState(false);
  const [pitcherBtnClick, setPitcherBtnClick] = useState(false);
  const [teamComponent, setTeamComponent] = useState(true);

  const handleBattingClick = () => {
    dispatch({type: 'BATTING_AVE', playerData})
    setCoachesBtnClick(false);
    setPitcherBtnClick(false);
    setTeamComponent(false);
    setBattingBtnClick(true);
  };

  const handleCoachesClick = () => {
    setBattingBtnClick(false);
    setPitcherBtnClick(false);
    setTeamComponent(false);
    setCoachesBtnClick(true);
  };

  const handlePitchingClick = () => {
    dispatch({type: 'PITCHING_ERA', playerData})
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
  }

  let team = playerData.map((player) => {
    return (
      <div className="batter" key={player.id}>
        <Avatar
          className={classes.large}
          src={player.image}
          alt="player image"
        />
        <div className="batter__info">
          <p>Batting Average</p>
          <h4>{player.name}</h4>
          <p className="batter__position">{player.position}</p>
        </div>
        <div className="batter__average">
          <h3>{player.average}</h3>
          <p>AVG</p>
        </div>
      </div>
    );
  });

  return (
    <div className="team">
      <h3 onClick={handleTeamClick}>2020 Razorbacks</h3>
      
      <div className="team__header">
        <button className="team__button" onClick={handleBattingClick}>
          BATTING
        </button>
        <button className="team__button" onClick={handlePitchingClick}>
          PITCHING
        </button>
        <button className="team__button" onClick={handleCoachesClick}>
          COACHES
        </button>
      </div>

      
    
      {/* if battingBtnClick true then <Batter.../> else null */}
      {teamComponent ? <>{team}</> : null}
      
      {battingBtnClick ? <Batter  /> : null}
      {coachesBtnClick ? <Coaches  /> : null}
      {pitcherBtnClick ? <Pitcher  /> : null}

      
    </div>
  );
}

export default Team;
