import { Avatar, makeStyles } from "@material-ui/core";
import React from "react";
import "./Player.css";

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

function Player({image, name, id, position, average}) {
  const classes = useStyles();

  return (
    <div className="player" key={id}>
      <Avatar className={classes.large} src={image} alt="List image" />
      <div className="player__info">
        <p>Batting Average</p>
        <h4>{name}</h4>
        <p className="player__position">{position}</p>
      </div>
      <div className="player__average">
        <h3>{average}</h3>
        <p>AVG</p>
      </div>
    </div>
  );
}

export default Player;
