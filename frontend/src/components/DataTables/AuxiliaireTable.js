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
import { setStartDate, setEndDate } from "../../actions/filters";
import selectedData from "../../selectors/info";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import { startSetArret } from "../../actions/auxiliaire";
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
    fontSize: theme.typography.pxToRem(14),
    fontWeight: theme.typography.fontWeightRegular,
    textAlign: "left",
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
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

const AuxiliaireTable = (props) => {
  const [calendarFocused, setCalendarFocused] = useState(null);
  const classes = useStyles();

  let cobb1 = 0;
  let cobb2 = 0;
  let cspedm = 0;

  const onFocusChange = (focused) => {
    setCalendarFocused(focused);
  };

  const onDateChange = ({ startDate, endDate }) => {
    props.dispatch(setStartDate(startDate));
    props.dispatch(setEndDate(endDate));
  };

  return (
    <div className="tableBox">
      <div className="calender">
        <h1>Historique des Auxiliaires :</h1>
        <div className="dateRange">
          <DateRangePicker
            startDate={props.filters.startDate}
            startDateId="startDate"
            endDate={props.filters.endDate}
            endDateId="endDate"
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

      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.content}>
          <TableContainer component={Paper}>
            <Table id="split_table" size="small">
              <TableHead>
                <TableCell align="left">date</TableCell>
                <TableCell align="left">OBB1</TableCell>
                <TableCell align="left">COBB1</TableCell>
                <TableCell align="left">OBB2</TableCell>
                <TableCell align="left">COBB2</TableCell>
                <TableCell align="left">SPEDM</TableCell>
                <TableCell align="left">CSPEDM</TableCell>
              </TableHead>
              <TableBody>
                {props.auxiliaire.map(({ date, obb1, obb2, spedm }, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      {moment(date, "DD-MM-YYYY").format("DD/MM/YYYY")}
                    </TableCell>
                    <TableCell>{obb1}</TableCell>
                    <TableCell>{(cobb1 += obb1)}</TableCell>
                    <TableCell>{obb2}</TableCell>
                    <TableCell>{(cobb2 += obb2)}</TableCell>
                    <TableCell>{spedm}</TableCell>
                    <TableCell>{(cspedm += spedm)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.auxiliaire);
  return {
    auxiliaire: selectedData(state.auxiliaire, state.filters),
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(AuxiliaireTable);
