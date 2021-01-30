import React from "react";
import { useStateValue } from "../../assets/stateProvider";
import Batter from "../Batter/Batter";
import "./BatterList.css";

function BatterList() {
  const [{ myPlayerData }, dispatch] = useStateValue();

  return (
    <div className="batterList">
      {myPlayerData.map((player) => (
        <Batter
          key={player.number}
          id={player.number}
          number={player.number}
          average={player.battingAve}
          name={player.firstName}
          // position={player.position}
          era={player.era ? player.era : null}
          gamesPitched={player.gamesPitched ? player.gamesPitched : null}
          gameWins={player.wins ? player.wins : null}
          gameSaves={player.saves ? player.saves : null}
          image={player.image}
        />
      ))}
    </div>
  );
}

export default BatterList;
