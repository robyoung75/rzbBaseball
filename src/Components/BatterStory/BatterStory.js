import React, { useEffect, useState } from "react";
import "./BatterStory.css";

import Logo from "../../Images/razorbackLogoFace.png";
import Brighton from "../../Images/BrightonAction.jpg";
import { useStateValue } from "../../assets/stateProvider";
import { battingAverages } from "../../assets/functions";

function BatterStory() {
  const [{ myPlayerData }, dispatch] = useStateValue(null);

  const [batAve, setBatAve] = useState([]);

  useEffect(() => {
    setBatAve(battingAverages(myPlayerData));
  }, []);

  return (
    <div className="batterStory">
      <h3>Batting Champ</h3>
      <figure className="batterStory__card">
        <img src={Logo} alt="razorback hog" className="batterStory__cardLogo" />
        <img src={Brighton} alt="player" className="batterStory__cardPlayer" />

        <figcaption>
          <div className="batterStory__figcaptionCol">
            <p style={{ color: "black", padding: 0, margin: 0 }}>
              #{batAve[0] ? batAve[0].number : null}
            </p>
            <p style={{ color: "black", padding: 0, margin: 0 }}>
              {batAve[0] ? batAve[0].firstName : null}{" "}
              {batAve[0] ? batAve[0].lastName : null}
            </p>
          </div>

          <div className="batterStory__figcaptionCol">
            {" "}
            <p style={{ color: "black", padding: 0, margin: 0 }}>Season Ave</p>
            <p style={{ color: "black", padding: 0, margin: 0 }}>
              {batAve[0] ? batAve[0].battingAve : null}
            </p>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default BatterStory;
