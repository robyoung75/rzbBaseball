import React from "react";
import { useStateValue } from "../../assets/stateProvider";
import Pitcher from "../Pitcher/Pitcher";
import "./PitcherList.css";

function PitcherList() {
  const [{ myPlayerData }, dispatch] = useStateValue();
  return (
    <div className="pitcherList">
      {myPlayerData.map((player) =>
        player.era > 0 ? (
          <Pitcher
            key={player.id}
            id={player.id}
            number={player.number}            
            era={player.era ? player.era : null}
            gamesPitched={player.gamesPitched ? player.gamesPitched : null}
            wins={player.gameWins ? player.gameWins : null}
            saves={player.gameSaves ? player.gameSaves : null}
            image={player.image}
          />
        ) : null
      )}
    </div>
  );
}

export default PitcherList;
