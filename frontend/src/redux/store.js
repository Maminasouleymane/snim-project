import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setStartDate, setEndDate } from "./actions/filters";
import selectedData from "./selectors/info";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import SvgMore from "@material-ui/icons/ExpandMore";
import moment from "moment";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

// ! SET_INFO

const Hope = (props) => {
  const [calendarFocused, setCalendarFocused] = useState(null);
  const [dateRange, setdateRange] = useState({
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });

  const onFocusChange = (focused) => {
    setCalendarFocused(focused);
  };

  const onDateChange = ({ startDate, endDate }) => {
    props.dispatch(setStartDate(startDate));
    props.dispatch(setEndDate(endDate));
  };

  // ? ///////////////////////////////////////////////
  return (
    <div>
      <DateRangePicker
        startDate={props.filters.startDate}
        startDateId="nlknklnknlk3"
        endDate={props.filters.endDate}
        endDateId="kjjkjnkjkklj0"
        focusedInput={calendarFocused}
        onDatesChange={onDateChange}
        onFocusChange={onFocusChange}
        numberOfMonths={1}
        isOutsideRange={() => false}
        showClearDates={true}
      />
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>EA</TableCell>
              <TableCell>ER</TableCell>
              <TableCell>Expand</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.info.map((liaison, index) => (
              <TableRow key={index}>
                <TableCell>{liaison.date}</TableCell>
                <TableCell>{liaison.ea}</TableCell>
                <TableCell>{liaison.er}</TableCell>
                <TableCell>
                  <IconButton onClick={console.log("clicked")}>
                    <SvgMore />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    info: selectedData(state.info, state.filters),
    filters: state.filters,
  };
};
export default connect(mapStateToProps)(Hope);
