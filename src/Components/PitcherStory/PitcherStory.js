import React, { useEffect, useState } from "react";
import Logo from "../../Images/razorbackLogoFace.png";
import Brighton from "../../Images/BrightonAction.jpg";
import { useStateValue } from "../../assets/stateProvider";
import "./PitcherStory.css";
import { pitcherOfTheWeek } from "../../assets/functions";

function PitcherStory() {
  const [{ myPlayerData }, dispatch] = useStateValue(null);

  const [era, setEra] = useState([]);
  const [ass, setAss] = useState([])
  
  useEffect(() => {
    setEra(pitcherOfTheWeek(myPlayerData))
    setAss(pitcherOfTheWeek(myPlayerData))
  }, []);

  return (
    <div className="pitcherStory">
      <h3>Pitching Champ</h3>
      <figure className="pitcherStory__card">
        <img
          src={Logo}
          alt="razorback hog"
          className="pitcherStory__cardLogo"
        />
        <img src={Brighton} alt="player" className="pitcherStory__cardPlayer" />

        <figcaption>
          <div className="pitcherStory__figcaptionCol">
            <p style={{ color: "black", padding: 0, margin: 0 }}>
              #{era[0] ? era[0].number : null}
            </p>
            <p style={{ color: "black", padding: 0, margin: 0 }}>
              {era[0] ? era[0].firstName : null}{" "}
              {era[0] ? era[0].lastName : null}
            </p>
          </div>

          <div className="pitcherStory__figcaptionCol">
            {" "}
            <p style={{ color: "black", padding: 0, margin: 0 }}>Overall Score</p>
            <p style={{ color: "black", padding: 0, margin: 0 }}>
              {era[0] ? parseFloat(era[0].evalScore).toFixed(2) : null}
            </p>
            <p style={{ color: "black", padding: 0, margin: 0 }}>
              ERA: {era[0] ? parseFloat(era[0].era).toFixed(2) : null}
            </p>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default PitcherStory;
