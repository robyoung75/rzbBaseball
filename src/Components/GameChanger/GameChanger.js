import React from "react";
import "./GameChanger.css";

function GameChanger() {
  return (
    <div className="gameChanger">
      <h3>Scores</h3>
      <div className="gameChanger__iFrame">
        <iframe
          src="//gc.com/scoreboard-5f88a82dba69b7fcaebbeca7?g=3&p=58ac7803378dca001a989c9c"
          width="500"
          height="110"
          scrolling="no"
          frameBorder="0"
          title="game_changer"
        ></iframe>
      </div>
    </div>
  );
}

export default GameChanger;
