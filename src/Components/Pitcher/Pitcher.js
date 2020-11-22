import React from "react";
import "./Pitcher.css";
import { useStateValue } from "../../assets/stateProvider";

import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";

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

function Pitcher({id, image, gamesPitched, name, wins, saves, era}) {
  const classes = useStyles();

  return (
    <div className="pitcher" key={id}>
      <Avatar className={classes.large} src={image} alt="player image" />
      <div className="pitcher__info">
        <p>Games Pitched {gamesPitched}</p>
        <h4>{name}</h4>
        <p className="pitcher__winSave">Wins {wins}</p>
        <p className="pitcher__winSave">Saves {saves}</p>
      </div>
      <div className="pitcher__era">
        <h3>{era}</h3>
        <p>ERA</p>
      </div>
    </div>
  );
}

export default Pitcher;
