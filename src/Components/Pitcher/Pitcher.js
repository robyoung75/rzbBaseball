import React from "react";
import "./Pitcher.css";

function Pitcher({ id, image, gamesPitched, name, wins, saves, era }) {
  return (
    <div className="pitcher" key={id}>
      <img src={image} alt="player image"></img>

      <div className="pitcher__info">
        <p>Games Pitched {gamesPitched}</p>
        <h4>{name}</h4>
        <p className="pitcher__winSave">Wins {wins}</p>
        <p className="pitcher__winSave">Saves {saves}</p>
      </div>
      <div className="pitcher__era">
        <h3>{era}</h3>
        <p>ERA</p>
      </div>
    </div>
  );
}

export default Pitcher;
