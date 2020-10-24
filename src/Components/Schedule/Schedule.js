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

  let sortedSchedule = schedule.sort(function (a, b) {
    const aTimestamp = a.scheduleData.timestamp;
    const bTimestamp = b.scheduleData.timestamp;

    let scheduleComparison = 0;

    if (aTimestamp > bTimestamp) {
      scheduleComparison = 1;
    } else if (aTimestamp < bTimestamp) {
      scheduleComparison = -1;
    }
    ;
    return scheduleComparison;
    
  });

  
  

  return (
    <div className="schedule">
      <h3>2020 Schedule</h3>

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
            {sortedSchedule.map((row) => (
              <TableRow key={row.scheduleId}>
                <TableCell component="th" scope="row">
                  <p>{row.opponent}</p>
                  <p className="schedule__tableCellOpponent">
                    {row.scheduleData.team}
                  </p>
                </TableCell>
                <TableCell align="left">
                  <p className="schedule__tableText">{row.scheduleData.date}</p>
                </TableCell>
                <TableCell align="left">
                  <p className="schedule__tableText">{row.scheduleData.time}</p>
                  <p className="schedule__tableCellTime">Game Time</p>
                  <p className="schedule__tableText">
                    {row.scheduleData.arrival}
                  </p>
                  <p className="schedule__tableCellTime">Arrival Time</p>
                </TableCell>

                <TableCell align="left">
                  <p className="schedule__tableText">
                    {row.scheduleData.address}
                  </p>
                  <p className="schedule__tableText">{row.scheduleData.city}</p>
                </TableCell>

                <TableCell align="left">
                  <Avatar
                    className={
                      row.scheduleData.uniform === "grey"
                        ? classes.grey
                        : classes.red
                    }
                  >
                    <p className="schedule__avatar">
                      {row.scheduleData.uniform}
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
