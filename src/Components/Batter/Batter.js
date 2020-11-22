import React from "react";
import "./Batter.css";
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

function Batter({ id, image, name, position, average }) {
  const classes = useStyles();

  return (
    <div className="batter" key={id}>
      <Avatar className={classes.large} src={image} alt="player image" />
      <div className="batter__info">
        <p>Batting Average</p>
        <h4>{name}</h4>
        <p className="batter__position">{position}</p>
      </div>
      <div className="batter__average">
        <h3>{average}</h3>
        <p>AVG</p>
      </div>
    </div>
  );
}
export default Batter;
