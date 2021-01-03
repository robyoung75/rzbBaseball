
import React from "react";
import "./Player.css";



function Player({image, name, id, position, average}) {
  

  return (
    <div className="player" key={id}>
      <img src={image} alt="player image"></img>
      
      <div className="player__info">
        <p>Batting Average</p>
        <h4>{name}</h4>
        <p className="player__position">{position}</p>
      </div>
      <div className="player__average">
        <h3>{average}</h3>
        <p>AVG</p>
      </div>
    </div>
  );
}

export default Player;
