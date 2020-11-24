import React from "react";
import { useStateValue } from "../../assets/stateProvider";
import Coaches from "../Coaches/Coaches";
import "./CoachesList.css";

function CoachesList() {
  const [{ playerData, coachesData }, dispatch] = useStateValue();

  return (
    <div className="coachesList">
      {coachesData.map((coach) => (
        <Coaches
          key={coach.id}
          id={coach.id}
          number={coach.number}
          name={coach.name}
          position={coach.position}
          image={coach.image}
        />
      ))}
    </div>
  );
}

export default CoachesList;
