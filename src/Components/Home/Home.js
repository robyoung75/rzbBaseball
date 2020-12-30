import React, { useState } from "react";

import Schedule from "../Schedule/Schedule";
import "./HomeMobile.css";
import GameChanger from "../GameChanger/GameChanger";
import PostsFeed from "../PostsFeed/PostsFeed";
import PostInput from "../PostInput/PostInput";
import TeamHeader from "../TeamHeader/TeamHeader";
import TeamList from "../TeamList/TeamList";

import PitcherList from "../PitcherList/PitcherList";
import BatterList from "../BatterList/BatterList";
import CoachesList from "../CoachesList/CoachesLlist";
import { useStateValue } from "../../assets/stateProvider";
import { useMediaQuery } from "react-responsive";

function Home() {
  const isMobile = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  const isIpadLsOrDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const [{ playerData, coachesData }, dispatch] = useStateValue();
  const [battingBtnClick, setBattingBtnClick] = useState();
  const [coachesBtnClick, setCoachesBtnClick] = useState();
  const [pitcherBtnClick, setPitcherBtnClick] = useState();
  const [teamBtnClick, setTeamBtnClick] = useState();
  const [mobile, setMobile] = useState(isMobile);
  const [iPadOrDeskTop, setIpadOrDeskTop] = useState(isIpadLsOrDesktop);

  const handleBattingClick = () => {
    setCoachesBtnClick(false);
    setPitcherBtnClick(false);
    setTeamBtnClick(false);
    setBattingBtnClick(true);
    dispatch({ type: "BATTING_AVE", playerData });
  };

  const handleCoachesClick = () => {
    setCoachesBtnClick(true);
    setBattingBtnClick(false);
    setPitcherBtnClick(false);
    setTeamBtnClick(false);
    dispatch({ type: "COACHES_DATA", coachesData });
    console.log("coaches click", coachesData);
  };

  const handlePitchingClick = () => {
    dispatch({ type: "PITCHING_ERA", playerData });
    setBattingBtnClick(false);
    setCoachesBtnClick(false);
    setTeamBtnClick(false);
    setPitcherBtnClick(true);
  };

  const handleTeamClick = () => {
    setBattingBtnClick(false);
    setCoachesBtnClick(false);
    setTeamBtnClick(true);
    setPitcherBtnClick(false);
    console.log("team click", playerData);
  };

  return (
    <div className="home">
      {iPadOrDeskTop ? (
        <>
          <div className="home__left">
            {" "}
            <TeamHeader
              handleBattingClick={handleBattingClick}
              handlePitchingClick={handlePitchingClick}
              handleTeamClick={handleTeamClick}
              handleCoachesClick={handleCoachesClick}
            />
            {teamBtnClick ? (
              <TeamList />
            ) : coachesBtnClick ? (
              <CoachesList />
            ) : pitcherBtnClick ? (
              <PitcherList />
            ) : battingBtnClick ? (
              <BatterList />
            ) : (
              <TeamList />
            )}
          </div>
          <div className="home__center">
            <PostInput />
            <PostsFeed />
          </div>
          <div className="home__right">
            <Schedule />
          </div>
        </>
      ) : mobile ? (
        <>
          <PostInput />
          <PostsFeed />
          <Schedule />
          <TeamHeader
            handleBattingClick={handleBattingClick}
            handlePitchingClick={handlePitchingClick}
            handleTeamClick={handleTeamClick}
            handleCoachesClick={handleCoachesClick}
          />
        </>
      ) : null}
    </div>
  );
}

export default Home;
