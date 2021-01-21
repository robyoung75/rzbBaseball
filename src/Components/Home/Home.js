import React, { useEffect, useState } from "react";

import Schedule from "../Schedule/Schedule";
import "./HomeMobile.css";
import GameChanger from "../GameChanger/GameChanger";
import PostsFeed from "../PostsFeed/PostsFeed";
import PostInput from "../PostInput/PostInput";
import TeamHeader from "../TeamHeader/TeamHeader";
import TeamList from "../TeamList/TeamList";
import StoryReel from "../StoryReel/StoryReel";

import PitcherList from "../PitcherList/PitcherList";
import BatterList from "../BatterList/BatterList";
import CoachesList from "../CoachesList/CoachesLlist";
import { useStateValue } from "../../assets/stateProvider";

function Home() {
  const [{ playerData, coachesData }, dispatch] = useStateValue();
  const [battingBtnClick, setBattingBtnClick] = useState();
  const [coachesBtnClick, setCoachesBtnClick] = useState();
  const [pitcherBtnClick, setPitcherBtnClick] = useState();
  const [teamBtnClick, setTeamBtnClick] = useState();
  // const [width, setWidth] = useState(window.innerWidth);
  // const [height, setheight] = useState(window.innerHeight);
  const [mobile, setMobile] = useState(window.innerWidth < 1224);
  // const [desktop, setDesktop] = useState(window.innerWidth > 1224);

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

  useEffect(() => {
    // screen size changes can fire as every pixel changes resulting is a huge
    // rerender filled with problems. Including the set timeout debounce
    // mechanism on the window resize allows for resize with a 1000 ms delay
    // before the rerender ensuring the complex data or component is ready prior
    // to the rerender.
    let timeoutId = null;  
      
    const handleWindowResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setMobile(window.innerWidth < 1300);
      }, 1000)      
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="home">
      {mobile ? (
        <>
          <div className="home__center">
            <StoryReel />
            <PostInput />
            <PostsFeed />
          </div>
          <div className="home__right">
            <Schedule />
          </div>

          <div className="home__left">
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
        </>
      ) : (
        <>
          <div className="home__left">
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
            <StoryReel mobile={mobile} />
            <PostInput />
            <PostsFeed />
          </div>
          <div className="home__right">
            <Schedule />
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
