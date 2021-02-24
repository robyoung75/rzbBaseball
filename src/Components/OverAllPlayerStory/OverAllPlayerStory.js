import React, { useEffect, useState } from "react";
import { useStateValue } from "../../assets/stateProvider";
import "./OverAllPlayerStory.css";
import Logo from "../../Images/razorbackLogoFace.png";
import Brighton from "../../Images/BrightonAction.jpg";
import { getOverallPlayer } from "../../assets/functions";

function OverAllPlayerStory() {
  const [{ myPlayerData }, dispatch] = useStateValue(null);
  const [allAroundPlayer, setAllAroundPlayer] = useState(null);

  useEffect(() => {
    setAllAroundPlayer(getOverallPlayer(myPlayerData)[0]);
  }, []);

  return (
    <div className="overAllPlayerStory">
        <h3>Overall</h3>
      <figure className="overAllPlayerStory__card">
        <img
          src={Logo}
          alt="razorback hog"
          className="overAllPlayerStory__cardLogo"
        />
        <img
          src={Brighton}
          alt="player"
          className="overAllPlayerStory__cardPlayer"
        />

        <figcaption>
          <div className="overAllPlayerStory__figcaptionCol">
            <p style={{ color: "black", padding: 0, margin: 0 }}>
              #{allAroundPlayer ? allAroundPlayer.number : null}
            </p>
            <p style={{ color: "black", padding: 0, margin: 0 }}>
              {allAroundPlayer ? allAroundPlayer.firstName : null}{" "}
              {allAroundPlayer ? allAroundPlayer.lastName : null}
            </p>
          </div>

          <div className="overAllPlayerStory__figcaptionCol">
            {" "}
            <p style={{ color: "black", padding: 0, margin: 0 }}>
              Player Score
            </p>
            <p style={{ color: "black", padding: 0, margin: 0 }}>
              {allAroundPlayer ? allAroundPlayer.evalScore : null}
            </p>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default OverAllPlayerStory;
