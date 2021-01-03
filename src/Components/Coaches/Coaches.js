
import React from "react";
import rzbFace from "../../Images/razorbackLogoFace.jpg"

import "./Coaches.css";

function Coaches({ id, image, name, position }) {
 

  return (
    <div className="coaches" key={id}>
      <img src={image} alt="List image"></img>
     
      <div className="coaches__info">
        
        <h4>{name}</h4>
        <p className="coaches__position">{position}</p>
      </div>
      <div className="coahes__rzbLogo">
        <img src={rzbFace} alt="champslogo"  />
      </div>
    </div>
  );
}

export default Coaches;
