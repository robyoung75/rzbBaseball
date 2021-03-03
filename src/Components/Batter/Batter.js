import React from "react";
import "./Batter.css";

function Batter({ id, image, name, position, average }) {
  return (
    <div className="batter" key={id}>
      <img src={image} alt="player image"></img>

      <div className="batter__info">
        <p>Batting Average</p>
        <h4>{name}</h4>
        <p className="batter__position">{position}</p>
      </div>
      <div className="batter__average">
        <h3>{average}</h3>
        <p>AVG</p>
      </div>
    </div>
  );
}
export default Batter;
