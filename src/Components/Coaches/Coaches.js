import React from "react";
import { useStateValue } from "../../assets/stateProvider";
import "./Coaches.css";

import { Avatar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));



function Coaches() {
  const classes = useStyles();
  const [{ coachesData }, dispatch] = useStateValue();

  let coaches = coachesData.map((coach) => {
    return (
      <div className="coach" key={coach.coachId}>
        <Avatar className={classes.large} src={coach.image} alt="coach image" />
        <div className="coach__info">
          <p>Coach</p>
          <h4>{coach.coachData.name}</h4>
          <p className="coach__position">{coach.coachData.position}</p>
        </div>
      </div>
    );
  });

  return <>{coaches}</>;
}

export default Coaches;
