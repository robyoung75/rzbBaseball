import React, { useEffect, useState } from "react";
import "./Story.css";
import { Col, Image, Row } from "react-bootstrap";
import Logo from "../../Images/razorbackLogoFace.png";
import Brighton from "../../Images/BrightonAction.jpg";
import { useStateValue } from "../../assets/stateProvider";
function Story() {
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
    <div className="story">
      <figure className="story__card">
        <img src={Logo} alt="razorback hog" className="story__cardLogo" />
        <img src={Brighton} alt="player" className="story__cardPlayer" />
        <figcaption>
          <Row>
            <Col>
              {" "}
              <p style={{color: "black"}}>#{batAve[0] ? batAve[0].number : null}</p>
            </Col>
            <Col>
              {" "}
              <p style={{color: "black"}}>{batAve[0] ? batAve[0].firstName : null}</p>
              
            </Col>
            <Col>
              <p style={{color: "black"}}>{batAve[0] ? batAve[0].lastName : null}</p>
            </Col>
          </Row>
        </figcaption>
      </figure>
    </div>
  );
}

export default Story;
