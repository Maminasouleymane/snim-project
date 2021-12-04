import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { setStartDate, setEndDate } from "../actions/filters";
import selectedData from "../selectors/info";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import { startSetArret } from "../actions/operation";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightBold,
  },
  content: {
    minWidth: "100%",
    // fontSize: theme.typography.pxToRem(14),
    // fontWeight: theme.typography.fontWeightRegular,
    // textAlign: "left",
    // marginTop: theme.spacing.unit * 3,
    // marginLeft: theme.spacing.unit * 3,
    // marginRight: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 650,
  },
  tableheader: {
    fontWeight: theme.typography.fontWeightBold,
    color: "#ffffff",
    background: "#3f51b5",
  },
  tableCell: {
    background: "#f50057",
  },
  button: {
    fontSize: "12px",
    minWidth: 100,
  },
}));

const ArretTable = (props) => {
  const [calendarFocused, setCalendarFocused] = useState(null);
  const classes = useStyles();

  let cop1 = 0;
  let cop2 = 0;
  let cop3 = 0;
  const onFocusChange = (focused) => {
    setCalendarFocused(focused);
  };

  const onDateChange = ({ startDate, endDate }) => {
    props.dispatch(setStartDate(startDate));
    props.dispatch(setEndDate(endDate));
  };

  return (
    <div className="mainContainer">
      <div className="titleAndCalanderContainer">
        <h1>Historique des Operations:</h1>
        <div>
          <DateRangePicker
            startDate={props.filters.startDate}
            startDateId="nlknklnknlk3"
            endDate={props.filters.endDate}
            endDateId="kjjkjnkjkklj0"
            startDatePlaceholderText="date début"
            endDatePlaceholderText="date fin"
            focusedInput={calendarFocused}
            onDatesChange={onDateChange}
            onFocusChange={onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            showClearDates={true}
          />
        </div>
      </div>
      <div className="contentTable" style={{ width: "80%" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.content}>
            <TableContainer component={Paper}>
              <Table id="split_table" size="small">
                <TableHead>
                  <TableCell align="left">date</TableCell>
                  <TableCell align="left">OP1</TableCell>
                  <TableCell align="left">COP1</TableCell>
                  <TableCell align="left">OP2</TableCell>
                  <TableCell align="left">COP2</TableCell>
                  <TableCell align="left">OP3</TableCell>
                  <TableCell align="left">COP3</TableCell>
                </TableHead>
                <TableBody>
                  {props.operation.map(({ date, op1, op2, op3 }, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        {moment(date, "DD-MM-YYYY").format("DD/MM/YYYY")}
                      </TableCell>
                      <TableCell>{op1}</TableCell>
                      <TableCell>{(cop1 += op1)}</TableCell>
                      <TableCell>{op2}</TableCell>
                      <TableCell>{(cop2 += op2)}</TableCell>
                      <TableCell>{op3}</TableCell>
                      <TableCell>{(cop3 += op3)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    operation: selectedData(state.operation, state.filters),
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ArretTable);
