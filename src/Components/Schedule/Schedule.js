import React from "react";
import "./ScheduleMobile.css";
import { useStateValue } from "../../assets/stateProvider";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Avatar, makeStyles } from "@material-ui/core";
import { deepOrange, deepPurple, red, grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  red: {
    color: theme.palette.getContrastText(red[900]),
    backgroundColor: red[500],
  },
  grey: {
    color: theme.palette.getContrastText(grey[400]),
    backgroundColor: grey[400],
  },
}));

export default function Schedule() {
  const classes = useStyles();
  const [{ schedule }, dispatch] = useStateValue();

  const newLocal = <h3>2020 Schedule</h3>;

  return (
    <div className="schedule">
      <h3>2020 Schedule</h3>
      <div className="schedule__table">
        <table>
        
          <thead>
            <tr>
              <th>Game</th>
              <th>Date</th>
              <th>Time</th>
              <th>Address</th>
              <th>Uniform</th>
            </tr>
          </thead>
          <tbody>
         
            {schedule.map((row) => (
              <tr key={row.id}>
                <td>
                  <h5>{row.opponent}</h5>
                  <p>{row.team}</p>
                </td>
                <td>
                  <p>{row.date}</p>
                </td>
                <td>
                  <p>
                    <strong>Game Time</strong>
                  </p>
                  <p>{row.time}</p>
                  <p>
                    <strong>Arrival Time</strong>
                  </p>
                  <p>{row.arrival}</p>
                </td>
                <td>
                  <p>{row.address}</p>

                  <p>{row.city}</p>
                </td>
                <td>
                  <Avatar
                    className={
                      row.uniform === "grey" ? classes.grey : classes.red
                    }
                  >
                    <p className="schedule__avatar">{row.uniform}</p>
                  </Avatar>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
