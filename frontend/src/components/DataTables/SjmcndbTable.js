import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect, useDispatch } from "react-redux";
import { startSetGroupe, filterGroupe } from "../../actions/groupe";
import { setStartDate, setEndDate } from "../../actions/filters";
import moment from "moment";
import Loading from "../Loading";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import selectedData from "../../selectors/info";
import groupeFilter from "../../selectors/groupe";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    marginTop: 30,
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightBold,
  },
  content: {
    maxWidth: "95%",
    fontSize: theme.typography.pxToRem(14),
    fontWeight: theme.typography.fontWeightRegular,
    textAlign: "left",
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit,
  },
  table: {
    maxWidth: "70%",
  },
  tableheader: {
    fontWeight: theme.typography.fontWeightBold,
    color: "#ffffff",
    background: "blue",
  },
  tableCell: {
    background: "#f50057",
    maxWidth: "30px",
  },
  button: {
    fontSize: "12px",
    minWidth: 100,
  },
  sticky: {
    position: "-webkit-sticky",
    position: "sticky",
    background: "#fff",
    left: 0,
    zIndex: 1,
  },
}));
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const SjmcndbTable = (props) => {
  const classes = useStyles();
  const [data, setData] = useState("GR3");
  const [calendarFocused, setCalendarFocused] = useState(null);

  const onFocusChange = (focused) => {
    setCalendarFocused(focused);
  };

  const onDateChange = ({ startDate, endDate }) => {
    props.dispatch(setStartDate(startDate));
    props.dispatch(setEndDate(endDate));
  };

  let cep = 0;
  let chmarche = 0;
  let chuile = 0;
  let cnp = 0;
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
  let dispo = 0; //? (24 - (ap + ai)) / 24
  let cdispo = 0;

  // ! this how should i use my selectors
  const testing = (arr) => {
    return arr.filter((item) => item.np === 4343);
  };
  const p = testing(props.groupe);
  console.log("this is p : ", p);

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const grp = props.groupe.filter((gr) => {
    return gr.numero === data;
  });

  console.log("im grp", grp);
  const eo = props.groupe.filter((gr) => gr.numero !== "EO");
  console.log(eo);
  const t = eo.reduce((r, o) => {
    let k = o.date; // unique `loc` key
    if (r[k] || (r[k] = []))
      r[k].push({ date: o.date, numero: o.numero, ep: o.ep });
    return r;
  }, []);

  const tt = Object.values(t).map((obj) => {
    return obj.reduce((acc, curr) => acc + curr.ep, 0);
  });

  const handelChange = (data) => {
    setData(data.target.value);
  };
  return (
    <div className="tableBox">
      <h1>SJMCNDB: Les groupes </h1>
      <div className="calender">
        <Select
          labelId="demo-simple-select-label"
          className="selectInput"
          value={data}
          name="groupes"
          onChange={(data) => handelChange(data)}
        >
          <MenuItem value={"GR3"}>groupe3</MenuItem>
          <MenuItem value={"GR7"}>groupe7</MenuItem>
          <MenuItem value={"GR8"}>groupe8</MenuItem>
          <MenuItem value={"GR10"}>groupe10</MenuItem>
        </Select>
        <div className="dateRange">
          <DateRangePicker
            startDate={props.filters.startDate}
            startDateId="nlknklnknl"
            endDate={props.filters.endDate}
            endDateId="kjjkjnkjkkl"
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
                CAP
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
                {grp.map(
                  ({ date, ep, hmarche, np, huile, comb, ap, ai }, index) => (
                    <TableRow key={index}>
                      <TableCell className={classes.sticky}>
                        {moment(date, "DD/MM/YYYY").format("DD/MM/YYYY")}
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
                              ? Number(
                                  ((100 * ep) / (400 * hmarche)).toFixed(3)
                                )
                              : 0)
                        }
                      </TableCell>
                      <TableCell>{(crend += rend)}</TableCell>
                      <TableCell>
                        {
                          (tmarche =
                            hmarche !== 0
                              ? Number((hmarche / (24 - (ai + ap))).toFixed(3))
                              : 0)
                        }
                      </TableCell>
                      <TableCell>{(ctmarche += tmarche)}</TableCell>
                      <TableCell>
                        {
                          (mtbf =
                            hmarche && np !== 0
                              ? Number((hmarche / np).toFixed(3))
                              : 0)
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
                      <TableCell>{(csphuile += sphuile)}</TableCell>
                      <TableCell>
                        {(dispo = Number(((24 - (ap + ai)) / 24).toFixed(3)))}
                      </TableCell>
                      <TableCell>{(cdispo += dispo)}</TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { groupe, filters } = state;
  return {
    groupe: selectedData(groupe, filters),
    filters,
  };
};

export default connect(mapStateToProps)(SjmcndbTable);
