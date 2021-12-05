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
import selectedData from "../../selectors/info";
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

const ArretGraphe = (props) => {
  const yesterDay = moment().subtract(1, "day").format("DD/MM/YYYY");
  console.log(props.arret);

  const yesterDayArret = props.arret.filter(
    (arret) => arret.date === yesterDay
  );

  const classes = useStyles();
  return (
    <div className="tableBox">
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.content}>
          <TableContainer component={Paper}>
            <Table id="split_table" size="small">
              <TableHead>
                <TableCell align="left">groupe</TableCell>
                <TableCell align="left">défaut</TableCell>
                <TableCell align="left">code défaut</TableCell>
                <TableCell align="left">type défaut</TableCell>
                <TableCell align="left">section</TableCell>
                <TableCell align="left">h_début</TableCell>
                <TableCell align="left">h_fin</TableCell>
                <TableCell align="left">durée(heure: minute)</TableCell>
                <TableCell align="left">durée (heure)</TableCell>
              </TableHead>
              <TableBody>
                {yesterDayArret.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={10}
                      style={{
                        fontSize: "x-large",
                        fontFamily: "-webkit-pictograph",
                        fontWeight: "bolder",
                      }}
                      align="center"
                    >
                      Aucun Arrét a été déclarée hier{" "}
                    </TableCell>{" "}
                  </TableRow>
                ) : (
                  yesterDayArret.map(
                    (
                      {
                        date,
                        groupe,
                        defaut,
                        codeDefaut,
                        typeDefaut,
                        section,
                        dateDebut,
                        dateFin,
                        dureeHM,
                        duree,
                      },
                      index
                    ) => (
                      <TableRow key={index}>
                        <TableCell>{groupe}</TableCell>
                        <TableCell>{defaut}</TableCell>
                        <TableCell>{codeDefaut}</TableCell>
                        <TableCell>{typeDefaut}</TableCell>
                        <TableCell>{section}</TableCell>
                        <TableCell>{dateDebut}</TableCell>
                        <TableCell>{dateFin}</TableCell>
                        <TableCell>{dureeHM}</TableCell>
                        <TableCell>{duree}</TableCell>
                      </TableRow>
                    )
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
  return {
    arret: selectedData(state.arret, state.filters),
  };
};

export default connect(mapStateToProps)(ArretGraphe);
