import React from "react";
import { useStateValue } from "../../assets/stateProvider";
import Pitcher from "../Pitcher/Pitcher";

function PitcherList() {
  const [{ playerData, coachesData }, dispatch] = useStateValue();
  return (
    <div className="pitcherList">
      {playerData.map((player) =>
        player.era ? (
          <Pitcher
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
        ) : null
      )}
    </div>
  );
}

export default PitcherList;
