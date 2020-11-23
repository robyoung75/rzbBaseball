import { Avatar, makeStyles } from "@material-ui/core";
import React from "react";

import "./Coaches.css";

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

function Coaches({ id, image, name, position }) {
  const classes = useStyles();

  return (
    <div className="coaches" key={id}>
      <Avatar className={classes.large} src={image} alt="List image" />
      <div className="coaches__info">
        <p>Batting Average</p>
        <h4>{name}</h4>
        <p className="coaches__position">{position}</p>
      </div>
      <div className="coahes__number">
        <h3>Fuck You</h3>
        <p>AVG</p>
      </div>
    </div>
  );
}

export default Coaches;
