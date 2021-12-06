import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import SvgMore from "@material-ui/icons/ExpandMore";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#5F9EA0",
    color: theme.palette.common.black,
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
const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightBold,
  },

  // ,
  content: {
    minWidth: "100%",
  },
  table: {
    width: "100%",
  },
  tableheader: {
    fontWeight: theme.typography.fontWeightBold,
    color: "green",
    background: "#3f51b5",
  },
  tableCell: {
    background: "purple",
    padding: "0px 8px",
  },
  button: {
    fontSize: "12px",
    minWidth: 100,
  },
  snim: {
    backgroundColor: theme.palette.common.blue,
  },
}));

const Snim = (props) => {
  const classes = useStyles();

  const consomateur = props.data.reduce(
    // Use "deconstruction" style assignment
    (result, element) => {
      result[element.consomateur === "snim" ? 0 : 1].push(element); // Determine and push to small/large arr
      return result;
    },
    [[], []]
  );
  const [snim, somelec] = consomateur;

  let cumEASnim = snim.reduce((sum, { ea, er }) => {
    return sum + ea;
  }, 0);
  let cumERSnim = snim.reduce((sum, { ea, er }) => {
    return sum + er;
  }, 0);
  let cumEASml = somelec.reduce((sum, { ea, er }) => {
    return sum + ea;
  }, 0);
  let cumERSml = somelec.reduce((sum, { ea, er }) => {
    return sum + er;
  }, 0);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={8} className={classes.content}>
          <TableContainer component={Paper}>
            <Table className="centeredTable">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Date</StyledTableCell>
                  <StyledTableCell>producteur </StyledTableCell>
                  <StyledTableCell>Index début EA</StyledTableCell>
                  <StyledTableCell>Index fin EA</StyledTableCell>
                  <StyledTableCell>Index début ER</StyledTableCell>
                  <StyledTableCell>Index fin ER</StyledTableCell>
                  <StyledTableCell>EA</StyledTableCell>
                  <StyledTableCell>ER</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.data.map(
                  (
                    { date, consomateur, ead, eaf, erd, erf, ea, er },
                    index
                  ) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell>{date}</StyledTableCell>
                      <StyledTableCell>{consomateur}</StyledTableCell>
                      <StyledTableCell>{ead}</StyledTableCell>
                      <StyledTableCell>{eaf}</StyledTableCell>
                      <StyledTableCell>{erd}</StyledTableCell>
                      <StyledTableCell>{erf}</StyledTableCell>
                      <StyledTableCell>{ea}</StyledTableCell>
                      <StyledTableCell>{er}</StyledTableCell>
                    </StyledTableRow>
                  )
                )}
                <TableRow rowSpan={2}>
                  <StyledTableCell colSpan={6} align="left"></StyledTableCell>
                  <StyledTableCell className="title" colSpan={1} align="left">
                    Cumul EA
                  </StyledTableCell>
                  <StyledTableCell className="title" colSpan={1} align="center">
                    Cumul ER
                  </StyledTableCell>
                </TableRow>
                <TableRow rowSpan={2} className="snim">
                  <StyledTableCell className="title" colSpan={6} align="left">
                    <span>SNIM</span>
                  </StyledTableCell>
                  <StyledTableCell colSpan={1} align="left">
                    {cumEASnim}
                  </StyledTableCell>
                  <StyledTableCell colSpan={1} align="left">
                    {cumERSnim}
                  </StyledTableCell>
                </TableRow>
                <TableRow rowSpan={2} className="sml">
                  <StyledTableCell className="title" colSpan={6} align="left">
                    <span>SML</span>
                  </StyledTableCell>
                  <StyledTableCell colSpan={1} align="left">
                    {cumEASml}
                  </StyledTableCell>
                  <StyledTableCell colSpan={1} align="left">
                    {cumERSml}
                  </StyledTableCell>
                </TableRow>
                <TableRow rowSpan={2} className="cumul">
                  <StyledTableCell className="title" colSpan={6} align="left">
                    <span> Difference cumulé</span>
                  </StyledTableCell>
                  <StyledTableCell colSpan={1} align="left">
                    {cumEASnim - cumEASml}
                  </StyledTableCell>
                  <StyledTableCell colSpan={1} align="left">
                    {cumERSnim - cumERSml}
                  </StyledTableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
};

export default Snim;
