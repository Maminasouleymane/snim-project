import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect, useDispatch } from "react-redux";
import { startSetGroupe, filterGroupe } from "../actions/groupe";
import moment from "moment";
import { setStartDate, setEndDate } from "../actions/filters";
import Loading from "./Loading";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import groupeFilter from "../selectors/groupe";
import selectedData from "../selectors/info";
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

const CleTable = (props) => {
  const classes = useStyles();

  const [calendarFocused, setCalendarFocused] = useState(null);

  const onFocusChange = (focused) => {
    setCalendarFocused(focused);
  };

  const onDateChange = ({ startDate, endDate }) => {
    props.dispatch(setStartDate(startDate));
    props.dispatch(setEndDate(endDate));
  };

  let ap = 0;
  let ai = 0;
  let cnp = 0;
  let chuile = 0;
  let cep = 0;
  let chmarche = 0;
  let comb = 0;
  let ccomb = 0;
  let cap = 0;
  let cai = 0;
  let rend = 0;
  let crend = 0;
  let tmarche = 0; //? hmarche / (24 -(ap + ai))
  let ctmarche = 0;
  let mtbf = 0; //? hmarche/ np
  let cmtbf = 0;
  let sphuile = 0; //? huile/ep
  let csphuile = 0;
  //   let dispo = 0; //? (24 - (ap + ai)) / 24
  let dispo = 0;
  let cdispo = 0;

  // ! this is how should i use my selectors
  const testing = (arr) => {
    return arr.filter((item) => item.np === 4343);
  };
  const p = testing(props.groupe);
  console.log("this is p : ", p);

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!

  const groupes = props.groupe.filter((gr) => gr.numero !== "EO");

  // gother groupes data by Day
  const groupesByDay = groupes.reduce(
    (groupesArray, { date, numero, ep, hmarche, np, huile, comb, ap, ai }) => {
      let day = date; // unique `loc` dayey
      if (groupesArray[day] || (groupesArray[day] = []))
        groupesArray[day].push({
          date,
          numero,
          ep,
          hmarche,
          np,
          huile,
          comb,
          ap,
          ai,
        });
      return groupesArray;
    },
    []
  );

  const cleData = Object.values(groupesByDay).map((obj) => {
    console.log(obj);
    return obj.reduce((acc, curr) => {
      return {
        date: acc.date,
        ep: acc.ep + curr.ep,
        hmarche: acc.hmarche + curr.hmarche,
        np: acc.np + curr.np,
        huile: acc.huile + curr.huile,
        comb: acc.comb + curr.comb,
        ap: acc.ap + curr.ap,
        ai: acc.ai + curr.ai,
      };
    });
  });

  const handelChange = (data) => {
    setData(data.target.value);
  };

  useEffect(() => moment().local("fr"));
  return (
    <div className="mainContainer">
      <div className="titleAndCalanderContainer">
        <h1>CLE </h1>
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
        <Grid container spacing={3} className={classes.content}>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table
                className={classes.table}
                stickyHeader
                aria-label="sticky table"
                size="small"
              >
                <TableCell
                  className="forcedHeader"
                  style={{ backgroundColor: "#5F9EA0" }}
                  className={classes.sticky}
                >
                  date
                </TableCell>
                <TableCell className="forcedHeader" align="left">
                  EP
                </TableCell>
                <TableCell className="forcedHeader" align="left">
                  CEP
                </TableCell>
                <TableCell className="forcedHeader" align="left">
                  HMarche
                </TableCell>
                <TableCell className="forcedHeader" align="left">
                  CHMarche
                </TableCell>
                <TableCell className="forcedHeader" align="left">
                  NP
                </TableCell>
                <TableCell className="forcedHeader" align="left">
                  CNP
                </TableCell>
                <TableCell className="forcedHeader" align="left">
                  Huile
                </TableCell>
                <TableCell className="forcedHeader" align="left">
                  CHuile
                </TableCell>
                <TableCell className="forcedHeader" align="left">
                  Comb
                </TableCell>
                <TableCell className="forcedHeader" align="left">
                  CComb
                </TableCell>
                <TableCell className="forcedHeader" align="left">
                  AP
                </TableCell>
                <TableCell className="forcedHeader" align="left">
                  AP
                </TableCell>
                <TableCell className="forcedHeader" align="left">
                  AI
                </TableCell>
                <TableCell className="forcedHeader" align="left">
                  CAI
                </TableCell>
                <TableCell className="forcedHeader" align="left">
                  Rendement
                </TableCell>
                <TableCell className="forcedHeader" align="left">
                  CRendement
                </TableCell>
                <TableCell className="forcedHeader" align="left">
                  Tmarche
                </TableCell>
                <TableCell className="forcedHeader" align="left">
                  CTmarche
                </TableCell>
                <TableCell className="forcedHeader" align="left">
                  MTBF
                </TableCell>
                <TableCell className="forcedHeader" align="left">
                  CMTBF
                </TableCell>
                <TableCell className="forcedHeader" align="left">
                  SPhuile
                </TableCell>
                <TableCell className="forcedHeader" align="left">
                  CSPhuile
                </TableCell>
                <TableCell className="forcedHeader" align="left">
                  Dispo
                </TableCell>
                <TableCell className="forcedHeader" align="left">
                  CDispo
                </TableCell>

                <TableBody>
                  {cleData.map(
                    ({ date, ep, hmarche, np, huile, comb, ap, ai }, index) => (
                      <TableRow key={index}>
                        <TableCell className={classes.sticky}>
                          {moment(date, "DD-MM-YYYY").format("DD/MM/YYYY")}
                        </TableCell>
                        <TableCell>{ep}</TableCell>
                        <TableCell>{(cep += ep)}</TableCell>
                        <TableCell>{hmarche}</TableCell>
                        <TableCell>{(chmarche += hmarche)}</TableCell>
                        <TableCell>{np}</TableCell>
                        <TableCell>{(cnp += np)}</TableCell>
                        <TableCell>{huile}</TableCell>
                        <TableCell>{(chuile += huile)}</TableCell>
                        <TableCell>{comb}</TableCell>
                        <TableCell>{(ccomb += comb)}</TableCell>
                        <TableCell>{ap}</TableCell>
                        <TableCell>{(cap += ap)}</TableCell>
                        <TableCell>{ai}</TableCell>
                        <TableCell>{(cai += ai)}</TableCell>
                        <TableCell>
                          {
                            (rend =
                              ep && hmarche !== 0
                                ? Number((ep / (4 * hmarche)).toFixed(3))
                                : 0)
                          }
                        </TableCell>
                        <TableCell>
                          {
                            (crend =
                              cep && chmarche !== 0
                                ? Number((cep / (4 * chmarche)).toFixed(3))
                                : 0)
                          }
                        </TableCell>
                        <TableCell>
                          {
                            (tmarche =
                              hmarche !== 0
                                ? Number(
                                    (hmarche / (24 - (ai + ap)) / 4).toFixed(3)
                                  )
                                : 0)
                          }
                        </TableCell>
                        <TableCell>{(ctmarche += tmarche)}</TableCell>
                        <TableCell>
                          {
                            (mtbf =
                              hmarche && np !== 0
                                ? Number((hmarche / np).toFixed(3))
                                : hmarche)
                          }
                        </TableCell>
                        <TableCell>{(cmtbf += mtbf)}</TableCell>
                        <TableCell>
                          {
                            (sphuile =
                              huile && ep !== 0
                                ? Number((huile / ep).toFixed(3))
                                : 0)
                          }
                        </TableCell>
                        <TableCell>
                          {
                            (csphuile =
                              chuile && cep !== 0
                                ? Number((chuile / cep).toFixed(3))
                                : 0)
                          }
                        </TableCell>
                        <TableCell>
                          {Number(((24 * 4 - (ap + ai)) / 24 / 4).toFixed(3)) *
                            100 +
                            "%"}
                        </TableCell>
                        <TableCell>
                          {
                            (cdispo += Number(
                              ((24 * 4 - (ap + ai)) / 24 / 4).toFixed(3)
                            ))
                          }
                        </TableCell>
                      </TableRow>
                    )
                  )}
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
  const { groupe, filters } = state;
  console.log(groupe);
  return {
    groupe: selectedData(groupe, filters),
    filters,
  };
};

export default connect(mapStateToProps)(CleTable);
