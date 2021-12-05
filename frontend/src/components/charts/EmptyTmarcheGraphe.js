import React from "react";
import { connect } from "react-redux";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryLabel,
} from "victory";
import selectedData from "../../selectors/info";
import TmarcheGraphe from "./TmarcheGraphe";

const EmptyTmarcheGraphe = (props) => {
  if (props.groupe.length === 0) {
    return <h2>Empty</h2>;
  }
  return <TmarcheGraphe />;
};

const mapStateToProps = (state) => {
  const { groupe, filters } = state;
  return {
    groupe: selectedData(groupe, filters),
  };
};
export default connect(mapStateToProps)(EmptyTmarcheGraphe);
