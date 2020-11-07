import React from "react";
import "./Schedule.css";
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
      {newLocal}

      <TableContainer component={Paper}>
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>
                <p className="schedule__tableCellHeader">Game</p>
              </TableCell>
              <TableCell align="left">
                <p className="schedule__tableCellHeader">Date</p>
              </TableCell>
              <TableCell align="left">
                <p className="schedule__tableCellHeader">Time</p>
              </TableCell>
              <TableCell align="left">
                <p className="schedule__tableCellHeader">Address</p>
              </TableCell>
              <TableCell align="left">
                <p className="schedule__tableCellHeader">Uniform</p>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schedule.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  <p>{row.opponent}</p>
                  <p className="schedule__tableCellOpponent">
                    {row.team}
                  </p>
                </TableCell>
                <TableCell align="left">
                  <p className="schedule__tableText">{row.date}</p>
                </TableCell>
                <TableCell align="left">
                  <p className="schedule__tableText">{row.time}</p>
                  <p className="schedule__tableCellTime">Game Time</p>
                  <p className="schedule__tableText">
                    {row.arrival}
                  </p>
                  <p className="schedule__tableCellTime">Arrival Time</p>
                </TableCell>

                <TableCell align="left">
                  <p className="schedule__tableText">
                    {row.address}
                  </p>
                  <p className="schedule__tableText">{row.city}</p>
                </TableCell>

                <TableCell align="left">
                  <Avatar
                    className={
                      row.uniform === "grey"
                        ? classes.grey
                        : classes.red
                    }
                  >
                    <p className="schedule__avatar">
                      {row.uniform}
                    </p>
                  </Avatar>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
