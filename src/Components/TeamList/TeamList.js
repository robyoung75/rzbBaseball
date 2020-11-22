import React, { useState } from "react";
import Player from "../Player/Player";
import "./TeamList.css";
import { useStateValue } from "../../assets/stateProvider";
import { makeStyles } from "@material-ui/core";
import Coaches from "../Coaches/Coaches";
import Pitcher from "../Pitcher/Pitcher";
import Batter from "../Batter/Batter";

function TeamList() {
  const [{ playerData, coachesData }, dispatch] = useStateValue();

  // state that holds the value of the clicked buttons.
  const [battingBtnClick, setBattingBtnClick] = useState(false);
  const [coachesBtnClick, setCoachesBtnClick] = useState(false);
  const [pitcherBtnClick, setPitcherBtnClick] = useState(false);
  const [teamComponent, setTeamComponent] = useState(true);

  return (
    <div className="teamList">
      {teamComponent
        ? playerData.map((player) => (
            <Player
              key={player.id}
              number={player.number}
              average={player.average}
              name={player.name}
              position={player.position}
              era={player.era ? player.era : null}
              gamesPitched={player.gamesPitched ? player.gamesPitched : null}
              wins={player.wins ? player.wins : null}
              saves={player.saves ? player.saves : null}
              image={player.image}
            />
          ))
        : coachesBtnClick
        ? coachesData.map((coach) => (
            <Coaches              
              image={coach.image}
              position={coach.position}
              name={coach.name}
              number={coach.number}
              id={coach.id}
            />
          ))
        : pitcherBtnClick
        ? playerData.map((player) => (
            <Pitcher              
              number={player.number}
              average={player.average}
              name={player.name}
              position={player.position}
              era={player.era ? player.era : null}
              gamesPitched={player.gamesPitched ? player.gamesPitched : null}
              wins={player.wins ? player.wins : null}
              saves={player.saves ? player.saves : null}
              image={player.image}
              id={player.id}
            />
          ))
        : battingBtnClick
        ? playerData.map((player) => (
            <Batter              
              number={player.number}
              average={player.average}
              name={player.name}
              position={player.position}
              era={player.era ? player.era : null}
              gamesPitched={player.gamesPitched ? player.gamesPitched : null}
              wins={player.wins ? player.wins : null}
              saves={player.saves ? player.saves : null}
              image={player.image}
              id={player.id}
            />
          ))
        : null}
    </div>
  );
}

export default TeamList;
