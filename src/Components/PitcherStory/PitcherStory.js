import React, { useEffect, useState } from "react";
import Logo from "../../Images/razorbackLogoFace.png";
import Brighton from "../../Images/BrightonAction.jpg";
import { useStateValue } from "../../assets/stateProvider";
import './PitcherStory.css'

function PitcherStory() {
  const [{ myPlayerData }, dispatch] = useStateValue(null);

  const [era, setEra] = useState([]);

  let pitchers = [];
  let selectedPitcher = [];

  let eraSort = myPlayerData.sort(function (a, b) {
    const aEra = a.era;
    const bEra = b.era;
    if (aEra !== null & bEra !== null) {
        return aEra - bEra;
    }
   
  });

  eraSort.map((pitcher) => {
    if (eraSort[0].era === pitcher.era) {
      return pitchers.push(pitcher);
    } else {
      return pitchers.push(eraSort[0]);
    }
  });

  if (pitchers.length > 1) {
    let randomNumber = Math.floor(Math.random() * selectedPitcher.length);
    selectedPitcher.push(pitchers[randomNumber]);
  } else {
    selectedPitcher.push(pitchers);
  }

  useEffect(() => {
    setEra(selectedPitcher);
  }, []);

  return (
    <div className="pitcherStory">
      <figure className="pitcherStory__card">
        <img src={Logo} alt="razorback hog" className="pitcherStory__cardLogo" />
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
            <p style={{ color: "black", padding: 0, margin: 0 }}>Season ERA</p>
            <p style={{ color: "black", padding: 0, margin: 0 }}>
              {era[0] ? era[0].era : null}
            </p>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default PitcherStory;
