import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../assets/stateProvider';
import './OverAllPlayerStory.css';
import Logo from "../../Images/razorbackLogoFace.png";
import Brighton from "../../Images/BrightonAction.jpg";

function OverAllPlayerStory() {
    const [{ myPlayerData }, dispatch] = useStateValue(null);
    const [allAroundPlayer, setAllAroundPlayer] = useState();
    const [batter, setBatter] = useState([])

    let batAveSort = [];
    let highBatAve = [];

    let rbiSort = [];
    let highRbi = [];

    let onBaseSort = [];
    let highOnBase = [];

    let batAve = myPlayerData.sort(function(a, b) {
        const aAve = a.battingAve;
        const bAve = b.battingAve;
        return bAve-aAve
    });

    batAve.map((batter) => {
        if (batAve[0].battingAve === batter.battingAve) {
            return batAveSort.push(batter)
        } else  {
            return batAveSort.push(batAve[0])
        }
    })

    if (batAveSort.length > 1) {
        let randomNumber = Math.floor(Math.random() * batAveSort.length);
        highBatAve.push(batAveSort[randomNumber])
    } else {
        highBatAve.push(batAveSort[0])
    }


    

    useEffect(() => {
        setBatter(highBatAve)
    }, [])




    return (
        <div className="overAllPlayerStory">
             <figure className="overAllPlayerStory__card">
        <img src={Logo} alt="razorback hog" className="overAllPlayerStory__cardLogo" />
        <img src={Brighton} alt="player" className="overAllPlayerStory__cardPlayer" />

        <figcaption>
          <div className="overAllPlayerStory__figcaptionCol">
            <p style={{ color: "black", padding: 0, margin: 0 }}>
              #{batter[0] ? batter[0].number : null}
            </p>
            <p style={{ color: "black", padding: 0, margin: 0 }}>
              {batter[0] ? batter[0].firstName : null}{" "}
              {batter[0] ? batter[0].lastName : null}
            </p>
          </div>

          <div className="overAllPlayerStory__figcaptionCol">
            {" "}
            <p style={{ color: "black", padding: 0, margin: 0 }}>Season ERA</p>
            <p style={{ color: "black", padding: 0, margin: 0 }}>
              {batter[0] ? batter[0].era : null}
            </p>
          </div>
        </figcaption>
      </figure>
        </div>
    )
}

export default OverAllPlayerStory
