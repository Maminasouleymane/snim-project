import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import { connect } from "react-redux";
import { setStartDate, setEndDate } from "../actions/filters";
import selectedData from "../selectors/info";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import ScrollButton from "./ScrollButton";
import Snim from "./Snim";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const TableSnim = (props) => {
  const [calendarFocused, setCalendarFocused] = useState(null);
  const [dateRange, setdateRange] = useState({
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });

  const classes = useStyles();

  const onFocusChange = (focused) => {
    setCalendarFocused(focused);
  };

  const onDateChange = ({ startDate, endDate }) => {
    props.dispatch(setStartDate(startDate));
    props.dispatch(setEndDate(endDate));
  };

  useEffect(() => {
    moment.locale("fr");
  });
  return (
    <div className="mainContainer">
      <div className="titleAndCalanderContainer">
        <h1>La liaison SNIM/SML :</h1>
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

      <div className="contenTable">
        <Snim data={props.info} />
      </div>
      <ScrollButton />
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("tis is info ", state.info);
  return {
    info: selectedData(state.info, state.filters),
    filters: state.filters,
  };
};
export default connect(mapStateToProps)(TableSnim);
