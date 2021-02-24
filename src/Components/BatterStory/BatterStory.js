import React, { useEffect, useState } from "react";
import "./BatterStory.css";
import { Col, Image, Row } from "react-bootstrap";
import Logo from "../../Images/razorbackLogoFace.png";
import Brighton from "../../Images/BrightonAction.jpg";
import { useStateValue } from "../../assets/stateProvider";

function BatterStory() {
  const [{ myPlayerData }, dispatch] = useStateValue(null);

  const [batAve, setBatAve] = useState([]);

  let topBatters = [];
  let selectedBatter = [];

  let batAveSort = myPlayerData.sort(function (a, b) {
    const aBatAve = a.battingAve;
    const bBatAve = b.battingAve;
    return bBatAve - aBatAve;
  });

  batAveSort.map((batter) => {
    if (batAveSort[0].battingAve === batter.battingAve) {
      return topBatters.push(batter);
    } else {
      return topBatters.push(batAveSort[0]);
    }
  });

  if (topBatters.length > 1) {
    let randomNumber = Math.floor(Math.random() * topBatters.length);
    selectedBatter.push(topBatters[randomNumber]);
  } else {
    selectedBatter.push(topBatters);
  }

  useEffect(() => {
    setBatAve(selectedBatter);
  }, []);

  return (
    <div className="batterStory">
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
