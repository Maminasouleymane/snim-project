import React from "react";
import { connect } from "react-redux";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryLabel,
} from "victory";
import selectedData from "../selectors/info";
import SpCombustibleGraphe from "./SpCombustibleGraphe";

const EmptySpCombustibleGraphe = (props) => {
  if (props.groupe.length === 0) {
    return <h2>Empty</h2>;
  }
  return <SpCombustibleGraphe />;
};

const mapStateToProps = (state) => {
  const { groupe, filters } = state;
  return {
    groupe: selectedData(groupe, filters),
  };
};
export default connect(mapStateToProps)(EmptySpCombustibleGraphe);
