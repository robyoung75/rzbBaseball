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

function Pitcher() {
  const [{ playerData }, dispatch] = useStateValue();
  const classes = useStyles();

  let pitcher = playerData.map((player) => {
    if (player.playerData.era) {
      return (
        <div className="pitcher" key={player.playerId}>
          <Avatar
            className={classes.large}
            src={player.image}
            alt="player image"
          />
          <div className="pitcher__info">
            <p>Games Pitched {player.playerData.gamesPitched}</p>
            <h4>{player.playerData.name}</h4>
            <p className="pitcher__winSave">Wins {player.playerData.wins}</p>
            <p className="pitcher__winSave">Saves {player.playerData.saves}</p>
          </div>
          <div className="pitcher__era">
            <h3>{player.playerData.era}</h3>
            <p>ERA</p>
          </div>
        </div>
      );
    }
  });

  return <>{pitcher}</>;
}

export default Pitcher;
