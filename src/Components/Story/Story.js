import React from "react";
import './Story.css';

import Logo from '../../Images/razorbackLogoFace.png'
import Brighton from "../../Images/BrightonAction.jpg"
function Story() {
  return (
    <div className="story">
      <figure className="story__card">
        <img src={Logo} alt="razorback hog" className="story__cardLogo" />
        <img src={Brighton} alt="player" className="story__cardPlayer" />
        <figcaption>
            <p>number firstname</p>
           
            <p>lastname</p>
        </figcaption>
      </figure>
    </div>
  );
}

export default Story;
