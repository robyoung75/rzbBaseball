import React from "react";
import "./Batter.css";
import { useStateValue } from "../../assets/stateProvider";

import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";

// import brighton from "../../Images/brightonWhite.jpg";

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


function Batter() {
  const [{ playerData }, dispatch] = useStateValue();
  const classes = useStyles();

  let batter = playerData.map((player) => {
    return (
      <div className="batter" key={player.playerId}>
        <Avatar
          className={classes.large}
          src={player.image}
          alt="player image"
        />
        <div className="batter__info">
          <p>Batting Average</p>
          <h4>{player.playerData.name}</h4>
          <p className="batter__position">{player.playerData.position}</p>
        </div>
        <div className="batter__average">
          <h3>{player.playerData.average}</h3>
          <p>AVG</p>
        </div>
      </div>
    );
  });

  return <>{batter}</>;
}

export default Batter;
