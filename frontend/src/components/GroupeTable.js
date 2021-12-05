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
import axios from "axios";

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

const ArretTable = () => {
  const [info, setInfo] = useState([]);

  const classes = useStyles();

  const fetchData = () => {
    axios
      .get("http://localhost:3009/arret")
      .then((response) => {
        console.log(response.data.groupe);
        setInfo(response.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.content}>
          <TableContainer component={Paper}>
            <Table id="split_table" size="small">
              <TableHead>
                <TableCell align="left">groupe</TableCell>
                <TableCell align="left">Ep </TableCell>
                <TableCell align="left">Hmarche</TableCell>
                <TableCell align="left">np</TableCell>
                <TableCell align="left">huile</TableCell>
                <TableCell align="left">comp</TableCell>
                <TableCell align="left">ap</TableCell>
                <TableCell align="left">ai</TableCell>
              </TableHead>
              <TableBody>
                {info.map((arret, index) => (
                  <TableRow key={index}>
                    <TableCell>{arret.groupe}</TableCell>
                    <TableCell>{arret.ep}</TableCell>
                    <TableCell>{arret.hmarche}</TableCell>
                    <TableCell>{arret.np}</TableCell>
                    <TableCell>{arret.huile}</TableCell>
                    <TableCell>{arret.comp}</TableCell>
                    <TableCell>{arret.ap}</TableCell>
                    <TableCell>{arret.ai}</TableCell>
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

export default ArretTable;
