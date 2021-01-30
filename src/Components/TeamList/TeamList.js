import React, { useState } from "react";
import Player from "../Player/Player";
import "./TeamList.css";
import { useStateValue } from "../../assets/stateProvider";
function TeamList() {
  const [{ myPlayerData }, dispatch] = useStateValue();

  return (
    <div className="teamList">
      {myPlayerData.map((player) => (
        <Player
          key={player.id}
          id={player.id}
          number={player.number}
          average={player.battingAve}
          name={player.firstName}
          position={player.position}
          era={player.era ? player.era : null}
          gamesPitched={player.gamesPitched ? player.gamesPitched : null}
          wins={player.gameWins ? player.gameWins : null}
          saves={player.gameSaves ? player.gameSaves : null}
          image={player.image}
        />
      ))}
    </div>
  );
}

export default TeamList;
