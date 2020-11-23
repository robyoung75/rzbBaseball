import React from "react";
import { useStateValue } from "../../assets/stateProvider";
import Batter from "../Batter/Batter";
import "./BatterList.css";

function BatterList() {
  const [{ playerData, coachesData }, dispatch] = useStateValue();

  return (
    <div className="batterList">
      {playerData.map((player) => (
        <Batter
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

export default BatterList;
