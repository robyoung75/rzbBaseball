import React, { useState } from "react";
import Player from "../Player/Player";
import "./TeamList.css";
import { useStateValue } from "../../assets/stateProvider";
function TeamList() {
  const [{ playerData, coachesData }, dispatch] = useStateValue();

  return (
    <div className="teamList">
      {playerData.map((player) => (
        <Player
          key={player.id}
          id={player.id}
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
      ))}
    </div>
  );
}

export default TeamList;
